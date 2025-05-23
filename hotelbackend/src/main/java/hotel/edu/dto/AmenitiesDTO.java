package hotel.edu.dto;

import java.util.Date;
import java.util.List;

import hotel.edu.model.RoomType;
import lombok.Data;
@Data
public class AmenitiesDTO {
	private int amenityId;
	private String amenitiesType;

	private int  updateBy;
	private int createdBy; 
	private Date createDate;
	private Date updateDate;
	private List<RoomType> roomType;
	private User user;

}
