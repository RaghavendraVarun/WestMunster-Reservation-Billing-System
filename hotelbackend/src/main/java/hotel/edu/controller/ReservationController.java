package hotel.edu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import hotel.edu.dto.FeedbackDTO;
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
	   
	   @GetMapping("/fetchIdReservation/{reservationId}")
		public ResponseEntity<String> getFetchIdReservation(@PathVariable int reservationId){
			
			ReservationDTO dto=reservationService.getFetchIdReservation(reservationId);
			return new ResponseEntity<>("fetched reservation successfully",HttpStatus.OK);		
		}
		
		
		@GetMapping("/getFetchAllReservation")
		public ResponseEntity<List<ReservationDTO>> getFetchAllReservation(){
			List<ReservationDTO> reservationdtolist=reservationService.getFetchAllReservations();
			return new ResponseEntity<>(reservationdtolist,HttpStatus.OK);
		}
	  


}

