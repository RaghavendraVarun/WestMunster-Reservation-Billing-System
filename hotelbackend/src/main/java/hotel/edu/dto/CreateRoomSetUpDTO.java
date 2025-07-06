package hotel.edu.dto;

import java.util.Date;
import java.util.List;

import hotel.edu.model.RoomNumberAllocation;
import hotel.edu.model.RoomType;
import hotel.edu.model.User;
import lombok.Data;

@Data
public class CreateRoomSetUpDTO {
	
	private String direction;
	private Integer floorNumber;
	private Integer count;
	private Integer roomTypeId;
    private Integer userId;		

}