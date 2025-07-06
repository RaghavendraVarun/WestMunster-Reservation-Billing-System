package hotel.edu.dto;

import java.util.Date;
import java.util.List;

import hotel.edu.model.RoomType;
import hotel.edu.model.User;
import lombok.Data;
@Data
public class AmenitiesDTO {
	
	private String amenitiesType;
	private Integer  updateBy;
	private Integer createdBy; 
	private Date createDate;
	private Date updateDate;
	private Integer roomTypeId;
	private Integer userId;

}
