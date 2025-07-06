package hotel.edu.dto;

import java.util.Date;

import lombok.Data;

@Data
public class RoomlocationupdateDto {

	private String direction;
	private Integer floorNumber;
	private Integer count;
	private Integer userId;
	private Integer roomTypeId;

}