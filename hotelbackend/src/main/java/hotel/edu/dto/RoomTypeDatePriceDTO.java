package hotel.edu.dto;

import java.sql.Date;

import lombok.Data;

@Data
public class RoomTypeDatePriceDTO {
	@Data
	public class RoomtypenameDTO {
	    private String roomTypeName;
	    private Integer totalRoom;
	    private Integer capacity;    
	    private Integer UserId;
	    private Integer roomTypeId;

	    private String seasonName;
	    private double price;
	    private Date startDate;
	    private Date endDate;
	}


}
