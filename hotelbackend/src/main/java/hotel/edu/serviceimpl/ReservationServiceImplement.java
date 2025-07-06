package hotel.edu.serviceimpl;

import hotel.edu.dto.AvailableRoomRequestDTO;
import hotel.edu.dto.CreateReservationDTO;
import hotel.edu.dto.DatesDTO;
import hotel.edu.dto.ReservationAvailableRoomNumberDTO;
import hotel.edu.dto.ReservationAvailableRoomtypeNumberDTO;
import hotel.edu.dto.ReservationResponseDTO;
import hotel.edu.dto.RoomNumberAllocationDTO;
import hotel.edu.dto.RoomTypeDTO;
import hotel.edu.dto.UpdateReservationDTO;
import hotel.edu.model.*;
import hotel.edu.repository.*;
import hotel.edu.service.EmailService;
import hotel.edu.service.ReservationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ReservationServiceImplement implements ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private RoomNumberAllocationRepository roomNumberAllocationRepository;

    @Autowired
    private ReservationRoomAllocationRepository reservationRoomAllocationRepository;
    
    @Autowired
    private EmailService emailService;

    @Override
    public Map<String, Object> createReservation(CreateReservationDTO dto) {
        User user = userRepository.findById(dto.getReservedBy())
            .orElseThrow(() -> new RuntimeException("User not found with ID: " + dto.getReservedBy()));

        Reservation reservation = new Reservation();
        reservation.setBookingStatus(dto.getBookingStatus());

        // Use formatter matching your input datetime format
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");

        // Parse to LocalDateTime
        LocalDateTime checkInDateTime = LocalDateTime.parse(dto.getCheckInDate(), formatter);
        LocalDateTime checkOutDateTime = LocalDateTime.parse(dto.getCheckOutDate(), formatter);

        // Set parsed values directly
        reservation.setCheckInDate(checkInDateTime);
        reservation.setCheckOutDate(checkOutDateTime);

        reservation.setNumberOfGuests(dto.getNoOfGuests());
        reservation.setNumberOfRooms(dto.getNoOfRooms());
        reservation.setReservedBy(user.getUserId());
        reservation.setReservedDate(new Date());
        reservation.setTotalCost(dto.getTotalCost());
        reservation.setUser(user);

        reservation = reservationRepository.save(reservation);

        emailService.sendReservationConfirmation(
            reservation.getUser().getEmail(),
            reservation.getUser().getUserName(),
            reservation.getBookingStatus(),
            reservation.getCheckInDate(),
            reservation.getCheckOutDate(),
            reservation.getNumberOfGuests(),
            reservation.getNumberOfRooms(),
            dto.getRoomIds()
        );

        for (Integer roomId : dto.getRoomIds()) {
            RoomNumberAllocation room = roomNumberAllocationRepository.findById(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found: " + roomId));

            ReservationRoomAllocation allocation = new ReservationRoomAllocation();
            allocation.setReservation(reservation);
            allocation.setCreatedBy(user.getUserId());
            allocation.setCreateDate(new Date());
            allocation.setRoomNumberAllocation(room);

            reservationRoomAllocationRepository.save(allocation);
        }

        Map<String, Object> response = new HashMap<>();
        response.put("reservationId", reservation.getReservationId());
        response.put("message", "Reservation saved successfully");

        return response;
    }
    @Override
    public Object updateReservation( UpdateReservationDTO dto) {
        Reservation reservation = reservationRepository.findById(dto.getReservationId())
            .orElseThrow(() -> new RuntimeException("Reservation not found with ID: " + dto.getReservationId()));

        User user = userRepository.findById(dto.getReservedBy())
            .orElseThrow(() -> new RuntimeException("User not found with ID: " + dto.getReservedBy()));

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

        LocalDate checkIn = LocalDate.parse(dto.getCheckInDate(), formatter);
        LocalDate checkOut = LocalDate.parse(dto.getCheckOutDate(), formatter);

        reservation.setBookingStatus(dto.getBookingStatus());
        reservation.setCheckInDate(checkIn.atStartOfDay());
        reservation.setCheckOutDate(checkOut.atStartOfDay());

        reservation.setNumberOfGuests(dto.getNoOfGuests());
        reservation.setNumberOfRooms(dto.getNoOfRooms());
        reservation.setTotalCost(dto.getTotalCost());
        reservation.setReservedBy(user.getUserId());
        reservation.setUpdatedBy(user.getUserId());
        reservation.setUpdateDate(new Date());

        reservation = reservationRepository.save(reservation);

        // Optional: clear old allocations and add new ones
        List<ReservationRoomAllocation> existingAllocations =
            reservationRoomAllocationRepository.findByReservation(reservation);
        reservationRoomAllocationRepository.deleteAll(existingAllocations);

        for (Integer roomId : dto.getRoomIds()) {
            RoomNumberAllocation room = roomNumberAllocationRepository.findById(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found with ID: " + roomId));

            ReservationRoomAllocation allocation = new ReservationRoomAllocation();
            allocation.setReservation(reservation);
            allocation.setCreatedBy(user.getUserId());
            allocation.setCreateDate(new Date());
            allocation.setRoomNumberAllocation(room);

            reservationRoomAllocationRepository.save(allocation);
        }

        return "Reservation updated successfully";
    }



    
	
    @Override
    public List<ReservationResponseDTO> getAllReservations() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

        return reservationRepository.findAll().stream()
            .map(reservation -> {
                ReservationResponseDTO dto = new ReservationResponseDTO();
                dto.setReservationId(reservation.getReservationId());
                dto.setBookingStatus(reservation.getBookingStatus());

                if (reservation.getCheckInDate() != null)
                    dto.setCheckInDate(reservation.getCheckInDate().format(formatter));

                if (reservation.getCheckOutDate() != null)
                    dto.setCheckOutDate(reservation.getCheckOutDate().format(formatter));
                dto.setReservedBy(reservation.getReservedBy());
                dto.setNumberOfGuests(reservation.getNumberOfGuests());
                dto.setNumberOfRooms(reservation.getNumberOfRooms());
                dto.setTotalCost(reservation.getTotalCost());
                dto.setReservedBy(reservation.getReservedBy());

                List<Integer> roomIds = reservationRoomAllocationRepository
                        .findByReservation(reservation)
                        .stream()
                        .map(allocation -> allocation.getRoomNumberAllocation().getRoomId())
                        .collect(Collectors.toList());

                dto.setRoomIds(roomIds);

                return dto;
            })
            .collect(Collectors.toList());
    }


    @Override
    public ReservationResponseDTO getReservationById(Integer reservationId) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

        Reservation reservation = reservationRepository.findById(reservationId)
            .orElseThrow(() -> new RuntimeException("Reservation not found with ID: " + reservationId));

        ReservationResponseDTO dto = new ReservationResponseDTO();
        dto.setReservationId(reservation.getReservationId());
        dto.setBookingStatus(reservation.getBookingStatus());

        if (reservation.getCheckInDate() != null)
            dto.setCheckInDate(reservation.getCheckInDate().format(formatter));
        if (reservation.getCheckOutDate() != null)
            dto.setCheckOutDate(reservation.getCheckOutDate().format(formatter));

        dto.setNumberOfGuests(reservation.getNumberOfGuests());
        dto.setNumberOfRooms(reservation.getNumberOfRooms());
        dto.setTotalCost(reservation.getTotalCost());
        dto.setReservedBy(reservation.getReservedBy());
        dto.setTotalCost(reservation.getTotalCost());

        List<Integer> roomIds = reservationRoomAllocationRepository
                .findByReservation(reservation)
                .stream()
                .map(allocation -> allocation.getRoomNumberAllocation().getRoomId())
                .collect(Collectors.toList());

        dto.setRoomIds(roomIds);

        return dto;
    }
    
    @Override
    public List<ReservationAvailableRoomNumberDTO> getAvailableRooms(String checkInDateStr, String checkOutDateStr) {
        try {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
            LocalDate checkIn = LocalDate.parse(checkInDateStr, formatter);
            LocalDate checkOut = LocalDate.parse(checkOutDateStr, formatter);

            LocalDateTime checkInDate = checkIn.atStartOfDay();
            LocalDateTime checkOutDate = checkOut.atStartOfDay();

            System.out.println("Parsed check-in: " + checkInDate + ", check-out: " + checkOutDate);

            List<Reservation> overlappingReservations = reservationRepository.findOverlappingReservations(checkInDate, checkOutDate);
            System.out.println("Found overlapping reservations: " + overlappingReservations.size());

            Set<Integer> reservedRoomIds = overlappingReservations.stream()
                .flatMap(res -> reservationRoomAllocationRepository.findByReservation(res).stream())
                .map(rra -> {
                    Integer roomId = rra.getRoomNumberAllocation().getRoomId();
                    System.out.println("Reserved Room ID: " + roomId);
                    return roomId;
                })
                .collect(Collectors.toSet());

            List<RoomNumberAllocation> allRooms = roomNumberAllocationRepository.findAll();

            return allRooms.stream()
                .filter(room -> !reservedRoomIds.contains(room.getRoomId()))
                .map(room -> new ReservationAvailableRoomNumberDTO(room.getRoomId(), room.getRoomNumber()))
                .collect(Collectors.toList());

        } catch (DateTimeParseException e) {
            throw new RuntimeException("Invalid date format. Please use dd-MM-yyyy", e);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to fetch available rooms.", e);
        }
    }

    
    


//	@Override
//	public List<ReservationAvailableRoomNumberDTO> getAvailableRoomtype(String checkInDate, String checkOutDate,
//			Integer roomTypeId) {
//		 try {
//	            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
//
//	            LocalDateTime checkIn = LocalDate.parse(checkInDate, formatter).atStartOfDay();
//	            LocalDateTime checkOut = LocalDate.parse(checkOutDate, formatter).atStartOfDay();
//
//	            List<Reservation> overlappingReservations =
//	                    reservationRepository.findOverlappingReservations(checkIn, checkOut);
//
//	            Set<Integer> reservedRoomIds = overlappingReservations.stream()
//	                .flatMap(res -> reservationRoomAllocationRepository.findByReservation(res).stream())
//	                .map(rra -> rra.getRoomNumberAllocation().getRoomId())
//	                .collect(Collectors.toSet());
//
//	            List<RoomNumberAllocation> allRooms = roomNumberAllocationRepository.findAll();
//
//	            return allRooms.stream()
//	                .filter(room -> !reservedRoomIds.contains(room.getRoomId()))
//	                .map(room -> new ReservationAvailableRoomNumberDTO(room.getRoomId(), room.getRoomNumber()))
//	                .collect(Collectors.toList());
//
//	        } catch (Exception e) {
//	            e.printStackTrace(); 
//	            throw new RuntimeException("Failed to parse dates or fetch availability.");
//	        }
//	}




	
@Override
public List<ReservationAvailableRoomNumberDTO> getAvailableRoomtype(String checkInDate, String checkOutDate, Integer roomTypeId) {
    try {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

        LocalDateTime checkIn = LocalDate.parse(checkInDate, formatter).atStartOfDay();
        LocalDateTime checkOut = LocalDate.parse(checkOutDate, formatter).atStartOfDay();

        // Fetch reservations overlapping with the requested dates
        List<Reservation> overlappingReservations = reservationRepository.findOverlappingReservations(checkIn, checkOut);

        // Collect all reserved room IDs for those reservations
        Set<Integer> reservedRoomIds = overlappingReservations.stream()
            .flatMap(res -> reservationRoomAllocationRepository.findByReservation(res).stream())
            .map(rra -> rra.getRoomNumberAllocation().getRoomId())
            .collect(Collectors.toSet());

        // Fetch all rooms for the given roomTypeId
        List<RoomNumberAllocation> allRooms = roomNumberAllocationRepository.findByRoomLocationSetUpRoomTypeRoomTypeId(roomTypeId);

        // Filter out reserved rooms, map to DTO, and return
        return allRooms.stream()
            .filter(room -> !reservedRoomIds.contains(room.getRoomId()))
            .map(room -> new ReservationAvailableRoomNumberDTO(room.getRoomId(), room.getRoomNumber()))
            .collect(Collectors.toList());

    } catch (Exception e) {
        e.printStackTrace();
        throw new RuntimeException("Failed to parse dates or fetch availability.");
    }
}

@Override
public List<ReservationAvailableRoomNumberDTO> getFreeRooms(DatesDTO date) {
	try {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        String checkInDate=date.getCheckInDate();
        String checkOutDate=date.getCheckOutDate();

        LocalDateTime checkIn = LocalDate.parse(checkInDate, formatter).atStartOfDay();
        LocalDateTime checkOut = LocalDate.parse(checkOutDate, formatter).atStartOfDay();

        List<ReservationRoomAllocation> allReservationsbooked =
                reservationRoomAllocationRepository.findAll();
        
        List<Reservation> overlappingReservations =
                reservationRepository.findOverlappingReservations(checkIn, checkOut);
        
        List<ReservationAvailableRoomNumberDTO> bookedRoomDTOs = allReservationsbooked.stream()
        	    .map(rra -> new ReservationAvailableRoomNumberDTO(rra.getRoomNumberAllocation().getRoomId(),null))
        	    .collect(Collectors.toList());
        
        Set<Integer> roomIdsToExclude = bookedRoomDTOs.stream()
            .map(ReservationAvailableRoomNumberDTO::getRoomId)
            .collect(Collectors.toSet());
        
        Set<Integer> reservedRoomIds = overlappingReservations.stream()
                .flatMap(res -> reservationRoomAllocationRepository.findByReservation(res).stream())
                .map(rra -> rra.getRoomNumberAllocation().getRoomId())
                .collect(Collectors.toSet());
        
        List<RoomNumberAllocation> allRooms = roomNumberAllocationRepository.findAll();
        
        List<ReservationAvailableRoomNumberDTO> resultbefore = allRooms.stream()
                .filter(room -> !reservedRoomIds.contains(room.getRoomId()))
                .map(room -> new ReservationAvailableRoomNumberDTO(room.getRoomId(), room.getRoomNumber()))
                .collect(Collectors.toList()); 

        List<ReservationAvailableRoomNumberDTO> result = resultbefore.stream()
            .filter(dto -> !roomIdsToExclude.contains(dto.getRoomId()))
            .collect(Collectors.toList());

        return result;
        
        
        



    } catch (Exception e) {
        e.printStackTrace(); 
        throw new RuntimeException("Failed to parse dates or fetch availability.");
    }
}


//@Override
//public List<ReservationAvailableRoomNumberDTO> getFreeRoomtype(AvailableRoomRequestDTO request) {
//	   try {
//	        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
//	        LocalDateTime checkIn = LocalDate.parse(request.getCheckInDate(), formatter).atStartOfDay();
//	        LocalDateTime checkOut = LocalDate.parse(request.getCheckOutDate(), formatter).atStartOfDay();
//
//	        // Step 1: Get overlapping reservations
//	        List<Reservation> overlappingReservations =
//	                reservationRepository.findOverlappingReservations(checkIn, checkOut);
//
//	        // Step 2: Get reserved room IDs
//	        Set<Integer> reservedRoomIds = overlappingReservations.stream()
//	            .flatMap(res -> reservationRoomAllocationRepository.findByReservation(res).stream())
//	            .map(rra -> rra.getRoomNumberAllocation().getRoomId())
//	            .collect(Collectors.toSet());
//
//	        // Step 3: Filter available rooms by roomTypeId and not reserved
//	        List<RoomNumberAllocation> allRoomsOfType = roomNumberAllocationRepository
//	            .findByRoomLocationSetUpRoomTypeRoomTypeId(request.getRoomTypeId());
//
//	        List<RoomNumberAllocation> availableRooms = allRoomsOfType.stream()
//	            .filter(room -> !reservedRoomIds.contains(room.getRoomId()))
//	            .collect(Collectors.toList());
//
//	        return availableRooms.stream()
//	            .map(room -> new ReservationAvailableRoomNumberDTO(room.getRoomId(), room.getRoomNumber()))
//	            .collect(Collectors.toList());
//
//	    } catch (Exception e) {
//	        e.printStackTrace();
//	        throw new RuntimeException("Failed to fetch available rooms.");
//	    }
//	}


@Override
public List<ReservationAvailableRoomNumberDTO> getFreeRoomtype(AvailableRoomRequestDTO request) {
    try {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        LocalDate checkInDate = LocalDate.parse(request.getCheckInDate(), formatter);
        LocalDate checkOutDate = LocalDate.parse(request.getCheckOutDate(), formatter);

        LocalDateTime checkIn = checkInDate.atStartOfDay();
        LocalDateTime checkOut = checkOutDate.atStartOfDay();

        // 1. Get overlapping reservations
        List<Reservation> overlappingReservations = reservationRepository
                .findOverlappingReservations(checkIn, checkOut);

        // 2. Get reserved room IDs
        Set<Integer> reservedRoomIds = overlappingReservations.stream()
                .flatMap(reservation ->
                        reservationRoomAllocationRepository.findByReservation(reservation).stream())
                .map(rra -> rra.getRoomNumberAllocation().getRoomId())
                .collect(Collectors.toSet());

        // 3. Get all rooms for given roomTypeId and floorNumber
        List<RoomNumberAllocation> allRooms = roomNumberAllocationRepository
        	    .findByRoomLocationSetUpFloorNumberAndRoomLocationSetUpRoomTypeRoomTypeId(
        	        request.getFloorNumber(),
        	        request.getRoomTypeId()
        	    );


        // 4. Filter out reserved ones
        List<RoomNumberAllocation> availableRooms = allRooms.stream()
                .filter(room -> !reservedRoomIds.contains(room.getRoomId()))
                .collect(Collectors.toList());

        // 5. Convert to DTO
        return availableRooms.stream()
                .map(room -> new ReservationAvailableRoomNumberDTO(
                        room.getRoomId(),
                        room.getRoomNumber()))
                .collect(Collectors.toList());

    } catch (DateTimeParseException e) {
        throw new IllegalArgumentException("Invalid date format. Please use dd-MM-yyyy.");
    } catch (Exception e) {
        e.printStackTrace();
        throw new RuntimeException("Failed to fetch available rooms.");
    }
}

@Override
public List<ReservationResponseDTO> getAllReservationsbyId(Integer userId) {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

    return reservationRepository.findReservationsByUserId(userId).stream()
        .map(reservation -> {
            ReservationResponseDTO dto = new ReservationResponseDTO();
            dto.setReservationId(reservation.getReservationId());
            dto.setBookingStatus(reservation.getBookingStatus());

            if (reservation.getCheckInDate() != null)
                dto.setCheckInDate(reservation.getCheckInDate().format(formatter));

            if (reservation.getCheckOutDate() != null)
                dto.setCheckOutDate(reservation.getCheckOutDate().format(formatter));

            dto.setNumberOfGuests(reservation.getNumberOfGuests());
            dto.setNumberOfRooms(reservation.getNumberOfRooms());
            dto.setTotalCost(reservation.getTotalCost());
            dto.setReservedBy(reservation.getReservedBy()); // assuming Integer userId in Reservation

            List<Integer> roomIds = reservationRoomAllocationRepository
                    .findByReservation(reservation)
                    .stream()
                    .map(allocation -> allocation.getRoomNumberAllocation().getRoomId())
                    .collect(Collectors.toList());

            dto.setRoomIds(roomIds);

            return dto;
        })
        .collect(Collectors.toList());
}
@Override
public List<ReservationResponseDTO> getReservationsByUserId(Integer userId) {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

    List<Reservation> reservations = reservationRepository.findByReservedBy(userId);

    return reservations.stream().map(reservation -> {
        ReservationResponseDTO dto = new ReservationResponseDTO();
        dto.setReservationId(reservation.getReservationId());
        dto.setBookingStatus(reservation.getBookingStatus());

        if (reservation.getCheckInDate() != null)
            dto.setCheckInDate(reservation.getCheckInDate().format(formatter));
        if (reservation.getCheckOutDate() != null)
            dto.setCheckOutDate(reservation.getCheckOutDate().format(formatter));

        dto.setNumberOfGuests(reservation.getNumberOfGuests());
        dto.setNumberOfRooms(reservation.getNumberOfRooms());
        dto.setTotalCost(reservation.getTotalCost());
        dto.setReservedBy(reservation.getReservedBy());

        List<Integer> roomIds = reservationRoomAllocationRepository
                .findByReservation(reservation)
                .stream()
                .map(allocation -> allocation.getRoomNumberAllocation().getRoomId())
                .collect(Collectors.toList());

        dto.setRoomIds(roomIds);

        return dto;
    }).collect(Collectors.toList());
}


}









	

    
