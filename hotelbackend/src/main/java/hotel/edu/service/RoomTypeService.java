package hotel.edu.service;

import java.util.List;

import hotel.edu.dto.RoomTypeDTO;
import hotel.edu.model.RoomType;

public interface RoomTypeService {

	RoomType createRoomType(RoomTypeDTO roomtypedto);

	List<RoomTypeDTO> getAllRoomType();

	RoomTypeDTO getroomTypebyId(int roomtypeId);



}
