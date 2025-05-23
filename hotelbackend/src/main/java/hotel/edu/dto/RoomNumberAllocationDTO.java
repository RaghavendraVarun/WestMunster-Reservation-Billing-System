package hotel.edu.dto;

import java.util.Date;

import hotel.edu.model.RoomLocationSetUp;
import lombok.Data;

@Data
public class RoomNumberAllocationDTO {
	
	private int roomId;
	private String roomNumber;
	private String landLineNumber;
	private int  updateBy;
	private int createdBy;
	private Date createDate;
	private Date updateDate;
	private RoomLocationSetUp roomLocationSetUp;


}
