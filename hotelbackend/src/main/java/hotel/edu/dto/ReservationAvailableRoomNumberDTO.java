package hotel.edu.dto;

import lombok.Data;

@Data
public class ReservationAvailableRoomNumberDTO {

    private Integer roomId;
    private String roomNumber;

    public ReservationAvailableRoomNumberDTO(Integer roomId, String roomNumber) {
        this.roomId = roomId;
        this.roomNumber = roomNumber;
    }
}
