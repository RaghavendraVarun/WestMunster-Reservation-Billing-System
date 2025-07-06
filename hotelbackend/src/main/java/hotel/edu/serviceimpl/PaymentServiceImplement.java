package hotel.edu.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hotel.edu.dto.PaymentDTO;
import hotel.edu.model.Payment;
import hotel.edu.model.Reservation;
import hotel.edu.repository.PaymentRepository;
import hotel.edu.repository.ReservationRepository;
import hotel.edu.service.PaymentService;

@Service
public class PaymentServiceImplement implements PaymentService{

	@Autowired
	private ReservationRepository reservationRepository;
	
	@Autowired
	private PaymentRepository paymentrepository;

	@Override
	public Payment createpayment(PaymentDTO paymentdto) {
	    Payment payment = new Payment();
	    
	    Reservation reservation = reservationRepository.findById(paymentdto.getReservationId())
	            .orElseThrow(() -> new RuntimeException("Reservation not found with ID: " + paymentdto.getReservationId()));

	        payment.setReservation(reservation); 
	    
//	    payment.setPaymentId(paymentdto.getPaymentId());
	    payment.setStatus(paymentdto.getStatus());
	    payment.setBillDateTime(paymentdto.getBillDateTime());
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
//	    paymentDTO.setPaymentId(payment.getPaymentId());
//	    paymentDTO.setDateTime(payment.getDateTime());
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
//	        dto.setPaymentId(payment.getPaymentId());
	        dto.setBillDateTime(payment.getBillDateTime());
	        dto.setPaymentMode(payment.getPaymentMode());
	        dto.setAmount(payment.getAmount());
	        dto.setStatus(payment.getStatus());
            dto.setReservationId(payment.getReservation().getReservationId());
	        dtoList.add(dto);
	    }

	    return dtoList;
	}


	

	
}
