package hotel.edu.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class RoomReqDTO {

	private LocalDate startDate;
	private LocalDate endDate;

}
