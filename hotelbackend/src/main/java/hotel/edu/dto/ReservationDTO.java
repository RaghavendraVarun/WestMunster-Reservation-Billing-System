package hotel.edu.dto;

import java.time.LocalDateTime;
import java.util.Date;

import lombok.Data;

@Data
public class ReservationDTO {

    private int reservationId;
    private String bookingStatus;
    private LocalDateTime checkInDate;
    private LocalDateTime checkOutDate;
    private int  noOfGuests;
    private Double totalCost;
    private int noOfRooms;
    private int reservedBy;
    private int updatedBy;
    private Date reservedDate;    
    private Date updateDate;
    
	

	
}