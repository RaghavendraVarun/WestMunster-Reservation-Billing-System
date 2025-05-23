package hotel.edu.service;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hotel.edu.dto.ReservationDTO;
import hotel.edu.model.Reservation;
import hotel.edu.repository.ReservationRepository;

@Service
public class ReservationServiceImplement implements ReservationService{
@Autowired
     private ReservationRepository reservationrepository;

@Override
public Reservation createReservation(ReservationDTO reservationDTO) {
	
	Reservation reservation=new Reservation();
	reservation.setReservationId(reservationDTO.getReservationId());
	reservation.setBookingStatus(reservationDTO.getBookingStatus());
	reservation.setCheckInDate(reservationDTO.getCheckInDate());
	reservation.setCheckOutDate(reservationDTO.getCheckOutDate());
	reservation.setNoOfGuests(reservationDTO.getNoOfGuests());
	reservation.setNoOfRooms(reservationDTO.getNoOfRooms());
	reservation.setTotalCost(reservationDTO.getTotalCost());
	reservation.setReservedBy(reservationDTO.getReservedBy());
	reservation.setUpdatedBy(reservationDTO.getUpdatedBy());
	reservation.setReservedDate(reservationDTO.getReservedDate());
	reservation.setUpdateDate(reservationDTO.getUpdateDate());

	return reservationrepository.save(reservation);
	}
	
@Override
public ReservationDTO getFetchIdReservation(int reservationId) {
    Reservation reservation = reservationrepository.findById(reservationId).orElse(null);
    if (reservation == null) {
        return null; 
    }

    ReservationDTO dto = new ReservationDTO();
    dto.setReservationId(reservation.getReservationId());
    dto.setBookingStatus(reservation.getBookingStatus());
    dto.setCheckInDate(reservation.getCheckInDate());
    dto.setCheckOutDate(reservation.getCheckOutDate());
    dto.setNoOfGuests(reservation.getNoOfGuests());
    dto.setNoOfRooms(reservation.getNoOfRooms());
    dto.setTotalCost(reservation.getTotalCost());
    dto.setReservedBy(reservation.getReservedBy());
    dto.setUpdatedBy(reservation.getUpdatedBy());
    dto.setReservedDate(reservation.getReservedDate());
    dto.setUpdateDate(reservation.getUpdateDate());

    return dto;
}

@Override
public List<ReservationDTO> getFetchAllReservations() {
    List<Reservation> reservations = reservationrepository.findAll();
    List<ReservationDTO> dtoList = new ArrayList<>();

    for (Reservation reservation : reservations) {
        ReservationDTO dto = new ReservationDTO();
        dto.setReservationId(reservation.getReservationId());
        dto.setBookingStatus(reservation.getBookingStatus());
        dto.setCheckInDate(reservation.getCheckInDate());
        dto.setCheckOutDate(reservation.getCheckOutDate());
        dto.setNoOfGuests(reservation.getNoOfGuests());
        dto.setNoOfRooms(reservation.getNoOfRooms());
        dto.setTotalCost(reservation.getTotalCost());
        dto.setReservedBy(reservation.getReservedBy());
        dto.setUpdatedBy(reservation.getUpdatedBy());
        dto.setReservedDate(reservation.getReservedDate());
        dto.setUpdateDate(reservation.getUpdateDate());

        dtoList.add(dto);
    }

    return dtoList;
}



}













