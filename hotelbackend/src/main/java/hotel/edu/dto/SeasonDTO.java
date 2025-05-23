package hotel.edu.dto;

import java.util.Date;

import hotel.edu.model.RoomType;
import hotel.edu.model.User;
import lombok.Data;
@Data
public class SeasonDTO {
	private int seasonId;
	private String seasonName;
	private double price;
	private Date startDate;
	private Date endDate;
	private int createdBy;
	private int updatedBy;
	private Date createdDate;
	private Date updateDate;
	
	private RoomType roomType;
	private User user;

}
