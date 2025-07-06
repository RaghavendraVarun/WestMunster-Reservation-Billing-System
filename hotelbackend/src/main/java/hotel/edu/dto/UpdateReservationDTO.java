package hotel.edu.dto;

import lombok.Data;
import java.util.Date;
import java.util.List;

@Data
public class UpdateReservationDTO {
	
	private Integer reservationId;
    private String bookingStatus;
    private String checkInDate;
    private String checkOutDate;
    private Integer noOfGuests;
    private double totalCost;
    private Integer noOfRooms;
    private Integer reservedBy;
    private Integer updatedBy;
//    private Date reservedDate;
//    private Date updateDate;
    private List<Integer> roomIds; 
}
