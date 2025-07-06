package hotel.edu.dto;

import lombok.Data;

@Data
public class RoomtypenameDTO {
	private String roomTypeName;
	private Integer totalRoom;
	private Integer capacity;	
	private Integer UserId;
	private Integer roomTypeId;
	private String seasonName;
	private double price;
}
