package hotel.edu.dto;

import lombok.Data;

@Data
public class UpdateRoomTypeDTO {
	
	private String roomTypeName;
	private Integer totalRoom;
	private Integer capacity;	
	private Integer updatedBy;

}
