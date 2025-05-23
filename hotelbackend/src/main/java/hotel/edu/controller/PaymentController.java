package hotel.edu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


import hotel.edu.dto.PaymentDTO;
import hotel.edu.model.Payment;
import hotel.edu.service.PaymentService;

@Controller
public class PaymentController {

	@Autowired
	private PaymentService paymentservice;
	
	@PostMapping("/payment")
	public ResponseEntity<String> createpayment(@RequestBody PaymentDTO paymentdto){
		Payment payment=paymentservice.createpayment(paymentdto);
		return new ResponseEntity<>("Payment Successful! Your transaction has been completed",HttpStatus.OK); 
	}
}
