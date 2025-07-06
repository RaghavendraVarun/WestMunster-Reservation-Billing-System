package hotel.edu.dto;

import java.util.Date;

import lombok.Data;

@Data
public class RoomlocationfetchallDto {

	private Integer locationId;
	private String direction;
	private Integer floorNumber;
	private Integer count;
	private Integer roomTypeId;
    private String roomTypeName;
    private Integer userId;

}