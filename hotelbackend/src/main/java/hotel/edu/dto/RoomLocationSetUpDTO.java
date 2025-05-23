package hotel.edu.dto;

import java.util.Date;
import java.util.List;

import hotel.edu.model.RoomNumberAllocation;
import hotel.edu.model.RoomType;
import lombok.Data;

@Data
public class RoomLocationSetUpDTO {
	
	private int locationId;
	private String direction;
	private int floorNumber;
	private int count;
	private int  updateBy;
	private int createdBy; 
	private Date createDate;
	private Date updateDate;
	
	private List<RoomNumberAllocation> roomNumberAllocation;
	private RoomType roomType;


}
