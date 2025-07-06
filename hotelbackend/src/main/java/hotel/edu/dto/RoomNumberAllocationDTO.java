package hotel.edu.dto;

import java.util.Date;

import hotel.edu.model.RoomLocationSetUp;
import hotel.edu.model.User;
import lombok.Data;

@Data
public class RoomNumberAllocationDTO {
	
	private String roomNumber;
	private String landLineNumber;
	private Integer userId;
	private String direction;
	private Integer floorNumber;
	private String roomTypeName;
	private Integer locationId;
	
	private Integer roomId;


}

