package hotel.edu.dto;

import java.util.Date;

import lombok.Data;

@Data
public class SeasonDetailsDTO {

	private Integer seasonId;
	private String seasonName;
	private Double price;
	private Date startDate;
	private Date endDate;
	private Integer CreatedBy;
	private Integer roomTypeId;
	

}
