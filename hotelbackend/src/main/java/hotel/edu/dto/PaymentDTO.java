package hotel.edu.dto;

import java.time.LocalDateTime;
import java.util.Date;

import lombok.Data;

@Data
public class PaymentDTO {
	 private int paymentId;
     private Date dateTime;
     private String paymentMode;
     private Double amount;
     private int status;

     
}
