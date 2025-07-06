package hotel.edu.dto;

import lombok.Data;

@Data
public class DatesDTO {
	 private String checkInDate;
	    private String checkOutDate;

	    public DatesDTO(String checkInDate, String checkOutDate) {
	        this.checkInDate = checkInDate;
	        this.checkOutDate = checkOutDate;
	    }
}
