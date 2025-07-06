package hotel.edu.dto;

import java.time.LocalDateTime;
import java.util.Date;

import lombok.Data;

@Data
public class FeedbackDTO {

	private String comment;
	private Double rating;
	private Date dateTime;
	private Integer userId;
	
	
}
