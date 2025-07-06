package hotel.edu.dto;

import java.util.Date;

import hotel.edu.model.RoomType;
import hotel.edu.model.User;
import lombok.Data;
@Data
public class SeasonDTO {

	private String seasonName;
	private double price;
	private Date startDate;
	private Date endDate;
	private Integer userId;
	private Integer roomTypeId;
	
}
