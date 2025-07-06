package hotel.edu.dto;

import java.util.List;

import lombok.Data;

@Data
public class ReservationResponseDTO {
	private Integer reservationId;
	 private String message;

    private String bookingStatus;
    private String checkInDate;
    private String checkOutDate;
    private Integer numberOfGuests;
    private Integer numberOfRooms;
    private Double totalCost;
    private Integer reservedBy;
    private List<Integer> roomIds;
    

}

