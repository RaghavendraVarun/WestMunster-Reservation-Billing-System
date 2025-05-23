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
	
	@GetMapping("/fetchIdPayment/{paymentId}")
	public ResponseEntity<String> getFetchIdPayment(@PathVariable int paymentId){
		
		PaymentDTO dto=paymentservice.getFetchIdPayment(paymentId);
		return new ResponseEntity<>("fetched payment successfully",HttpStatus.OK);		
	}
	
	
	@GetMapping("/getFetchAllPayment")
	public ResponseEntity<List<PaymentDTO>> getFetchAllPayment(){
		List<PaymentDTO> paymentdtolist=paymentservice.getFetchAllPayments();
		return new ResponseEntity<>(paymentdtolist,HttpStatus.OK);
	}
}
