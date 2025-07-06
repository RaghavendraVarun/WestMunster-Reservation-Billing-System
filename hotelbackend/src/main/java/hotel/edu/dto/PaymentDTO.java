package hotel.edu.dto;

import java.time.LocalDateTime;
import java.util.Date;

import lombok.Data;

@Data
public class PaymentDTO {
	
	private Date billDateTime;
     private String paymentMode;
     private Double amount;
     private Integer status;
     private Integer reservationId;	

     
}
