package hotel.edu.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hotel.edu.dto.AvailableRoomRequestDTO;
import hotel.edu.dto.CreateReservationDTO;
import hotel.edu.dto.DatesDTO;
import hotel.edu.dto.ReservationAvailableRoomNumberDTO;
import hotel.edu.dto.ReservationAvailableRoomtypeNumberDTO;
import hotel.edu.dto.ReservationResponseDTO;
import hotel.edu.dto.UpdateReservationDTO;
import hotel.edu.model.Reservation;
import hotel.edu.service.ReservationService;

@CrossOrigin("*")
@RestController
public class ReservationController {

	@Autowired
	private ReservationService reservationService;

	@PostMapping("/createReservation")
	public ResponseEntity<Map<String, Object>> createReservation(@RequestBody CreateReservationDTO dto) {
	    Map<String, Object> response = reservationService.createReservation(dto);
	    return ResponseEntity.status(HttpStatus.CREATED).body(response);
	}

	   
	   @PutMapping("/updateReservation") 
	   public Object updateReservation(@RequestBody UpdateReservationDTO dto) {
	
		   return reservationService.updateReservation(dto) ;
		   
	   }
	   
	   
	   @GetMapping("/reservationdetailsfetchall")
	   public ResponseEntity<List<ReservationResponseDTO>> getAllReservations() {
	       List<ReservationResponseDTO> reservations = reservationService.getAllReservations();
	       return ResponseEntity.ok(reservations);
	   }

	   @GetMapping("/reservations/{id}")
	   public ResponseEntity<ReservationResponseDTO> getReservationById(@PathVariable Integer id) {
	       ReservationResponseDTO dto = reservationService.getReservationById(id);
	       return ResponseEntity.ok(dto);
	   }
	   
	   @GetMapping("/available-rooms")
	    public ResponseEntity<List<ReservationAvailableRoomNumberDTO>> getAvailableRooms(
	            @RequestParam String checkInDate,
	            @RequestParam String checkOutDate) {
	        List<ReservationAvailableRoomNumberDTO> availableRooms =
	                reservationService.getAvailableRooms(checkInDate, checkOutDate);
	        return ResponseEntity.ok(availableRooms);
	    }

	   	// show all available
	   @GetMapping("/available-roomtype")
	    public ResponseEntity<List<ReservationAvailableRoomNumberDTO>> getAvailableRoomtype(
	            @RequestParam Integer roomTypeId,
	            @RequestParam String checkInDate,
	            @RequestParam String checkOutDate) {

	        List<ReservationAvailableRoomNumberDTO> availableRooms =
	                reservationService.getAvailableRoomtype(checkInDate, checkOutDate, roomTypeId);

	        return ResponseEntity.ok(availableRooms);
	    }
	   
	   @PostMapping("/free-rooms")
	   public ResponseEntity<List<ReservationAvailableRoomNumberDTO>> getFreeRooms(
	           @RequestBody DatesDTO dates) {
	       List<ReservationAvailableRoomNumberDTO> freeRooms = reservationService.getFreeRooms(dates);
	       return ResponseEntity.ok(freeRooms);
	   }

//	   @PostMapping("/free-roomtype")
//	   public ResponseEntity<List<ReservationAvailableRoomNumberDTO>> getFreeRoomtype(
//	           @RequestBody AvailableRoomRequestDTO request) {
//	       List<ReservationAvailableRoomNumberDTO> freeRooms = reservationService.getFreeRoomtype(request);
//	       return ResponseEntity.ok(freeRooms);
//	   }
	   
	   // 
	   
	   @PostMapping("/free-roomtype")
	   public ResponseEntity<List<ReservationAvailableRoomNumberDTO>> getFreeRoomtype(
	           @RequestBody AvailableRoomRequestDTO request) {
	       List<ReservationAvailableRoomNumberDTO> freeRooms = reservationService.getFreeRoomtype(request);
	       return ResponseEntity.ok(freeRooms);
	   }
	   
	   @GetMapping("/reservationsfetchall/{reservationId}")
	   public ResponseEntity<List<ReservationResponseDTO>> getAllReservationsbyId(@PathVariable Integer reservationId) {
	       return ResponseEntity.ok(reservationService.getAllReservationsbyId(reservationId));
	   }
	   
	   @GetMapping("/reservations/user/{userId}")
	   public ResponseEntity<List<ReservationResponseDTO>> getReservationsByUser(@PathVariable Integer userId) {
	       List<ReservationResponseDTO> reservations = reservationService.getReservationsByUserId(userId);
	       return ResponseEntity.ok(reservations);
	   }


}

