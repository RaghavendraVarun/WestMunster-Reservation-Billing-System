package hotel.edu.service;

import java.util.ArrayList;
import java.util.List;

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

	@Override
	public PaymentDTO getFetchIdPayment(int paymentId) {
	    Payment payment = paymentrepository.findById(paymentId).orElse(null);
	    if (payment == null) {
	        return null; // Or throw an exception, e.g., EntityNotFoundException
	    }

	    PaymentDTO paymentDTO = new PaymentDTO();
	    paymentDTO.setPaymentId(payment.getPaymentId());
	    paymentDTO.setDateTime(payment.getDateTime());
	    paymentDTO.setPaymentMode(payment.getPaymentMode());
	    paymentDTO.setAmount(payment.getAmount());
	    paymentDTO.setStatus(payment.getStatus());

	    return paymentDTO;
	}

	@Override
	public List<PaymentDTO> getFetchAllPayments() {
	    List<Payment> payments = paymentrepository.findAll();
	    List<PaymentDTO> dtoList = new ArrayList<>();

	    for (Payment payment : payments) {
	        PaymentDTO dto = new PaymentDTO();
	        dto.setPaymentId(payment.getPaymentId());
	        dto.setDateTime(payment.getDateTime());
	        dto.setPaymentMode(payment.getPaymentMode());
	        dto.setAmount(payment.getAmount());
	        dto.setStatus(payment.getStatus());

	        dtoList.add(dto);
	    }

	    return dtoList;
	}


	

	
}
