package hotel.edu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import hotel.edu.dto.ReservationDTO;

import hotel.edu.model.Reservation;
import hotel.edu.service.ReservationService;

@Controller
public class ReservationController {

	@Autowired
	   private ReservationService reservationService;

	   @PostMapping("/createreservation")
	   public ResponseEntity<String> createReservation(@RequestBody ReservationDTO reservationDTO) {
	       Reservation reservation = reservationService.createReservation(reservationDTO);
	       return new ResponseEntity<>("Reservation completed successfully", HttpStatus.CREATED);
	   }
	  


}

