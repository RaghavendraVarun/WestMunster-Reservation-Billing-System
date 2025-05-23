package hotel.edu.service;

import java.util.List;

import hotel.edu.dto.PaymentDTO;
import hotel.edu.model.Payment;

public interface PaymentService {

	Payment createpayment(PaymentDTO paymentdto);

	PaymentDTO getFetchIdPayment(int paymentId);

	List<PaymentDTO> getFetchAllPayments();

	

	

}
