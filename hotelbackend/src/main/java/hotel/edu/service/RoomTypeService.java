package hotel.edu.service;

import java.util.List;

import hotel.edu.dto.RoomTypeDTO;
import hotel.edu.dto.RoomTypeDatePriceDTO;
import hotel.edu.dto.RoomtypenameDTO;
import hotel.edu.dto.UpdateRoomTypeDTO;
import hotel.edu.model.RoomType;

public interface RoomTypeService {

	Object createRoomType(RoomTypeDTO roomtypedto);

	List<RoomTypeDTO> getAllRoomType();

	RoomTypeDTO getroomTypebyId(int roomtypeId);

	Object roomTypeUpdate(int roomTypeId, UpdateRoomTypeDTO updateDTO);

	Object roomTypeDropDown();

	List<RoomtypenameDTO> getFetchAllRoomType(String roomTypeName);

	List<RoomtypenameDTO> getfetchallprice(String roomTypeName);

	List<RoomTypeDatePriceDTO> getFetchAllPrice(String roomTypeName);

}