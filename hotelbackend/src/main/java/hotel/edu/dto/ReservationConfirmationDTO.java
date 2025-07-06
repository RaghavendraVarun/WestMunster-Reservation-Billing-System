package hotel.edu.dto;

import hotel.edu.model.Reservation;
import lombok.Data;

@Data
public class ReservationConfirmationDTO {
	   private String bookId;
	    private String checkIn;
	    private String checkOut;
	    private String roomTypeName;
	    private String roomNo;
	    private int guests;
	    private String paymentType;
	    private Double totalAmount;
	    private Double paid;

	  

}
