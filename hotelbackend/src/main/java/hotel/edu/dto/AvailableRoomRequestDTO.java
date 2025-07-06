package hotel.edu.dto;

import lombok.Data;

@Data
public class AvailableRoomRequestDTO {

    private String checkInDate;
    private String checkOutDate;
    private Integer roomTypeId;
    private Integer floorNumber;

}
