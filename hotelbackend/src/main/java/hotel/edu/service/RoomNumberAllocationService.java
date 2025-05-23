package hotel.edu.service;

import java.util.List;

import hotel.edu.dto.RoomNumberAllocationDTO;
import hotel.edu.model.RoomNumberAllocation;

public interface RoomNumberAllocationService {

	RoomNumberAllocation createRoomnumberAllocation(RoomNumberAllocationDTO rnadto);

	List<RoomNumberAllocationDTO> getFetchAllRNA();

	RoomNumberAllocationDTO getFetchIdRoomnumber(int roomId);

}
