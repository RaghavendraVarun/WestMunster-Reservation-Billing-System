package hotel.edu.dto;

import lombok.Data;

@Data
public class ReservationAvailableRoomtypeNumberDTO {

	   
	    private Integer locationId;
	    private Integer roomTypeId;
	    private Integer roomId;

	    public ReservationAvailableRoomtypeNumberDTO(Integer roomId, Integer roomTypeId,Integer locationId) {
	        this.roomId = roomId;
	        this.roomTypeId = roomTypeId;
	        this.locationId = locationId;
	       
	    }
}
