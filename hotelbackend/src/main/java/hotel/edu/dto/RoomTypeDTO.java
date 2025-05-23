package hotel.edu.dto;

import java.util.Date;
import java.util.List;

import hotel.edu.model.Amenities;
import hotel.edu.model.RoomLocationSetUp;
import hotel.edu.model.Season;
import lombok.Data;
@Data
public class RoomTypeDTO {
	private int roomTypeId;
	private String roomTypeName;
	private int totalRoom;
	private int capacity;
	private int  updateBy;
	private int createdBy; 
	private Date createDate;
	private Date updateDate;
	private List<Amenities> amenities;
	private List<Season> season;
	private List<RoomLocationSetUp> roomLocationSetUp;


}
