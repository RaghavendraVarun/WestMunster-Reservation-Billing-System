package hotel.edu.dto;

import java.util.Date;
import java.util.List;

import hotel.edu.model.Amenities;
import hotel.edu.model.RoomLocationSetUp;
import hotel.edu.model.Season;
import hotel.edu.model.User;
import lombok.Data;
@Data
public class RoomTypeDTO {

	private String roomTypeName;
	private Integer totalRoom;
	private Integer capacity;	
	private Integer UserId;
	private Integer roomTypeId;

}