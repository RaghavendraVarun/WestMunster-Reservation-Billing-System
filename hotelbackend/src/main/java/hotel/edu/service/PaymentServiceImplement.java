package hotel.edu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hotel.edu.dto.PaymentDTO;
import hotel.edu.model.Payment;
import hotel.edu.repository.PaymentRepository;

@Service
public class PaymentServiceImplement implements PaymentService{

	
	@Autowired
	private PaymentRepository paymentrepository;

	@Override
	public Payment createpayment(PaymentDTO paymentdto) {
	    Payment payment = new Payment();

	    payment.setPaymentId(paymentdto.getPaymentId());
	    payment.setStatus(paymentdto.getStatus());
	    payment.setDateTime(paymentdto.getDateTime());
	    payment.setAmount(paymentdto.getAmount());
	    payment.setPaymentMode(paymentdto.getPaymentMode());

	    return paymentrepository.save(payment); 
	}

	

	
}
