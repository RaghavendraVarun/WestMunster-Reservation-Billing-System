package hotel.edu.service;

import java.util.List;

import hotel.edu.dto.RoomNumberAllocationDTO;
import hotel.edu.model.RoomNumberAllocation;

public interface RoomNumberAllocationService {


	

	RoomNumberAllocationDTO getFetchIdRoomnumber(int roomId);

	RoomNumberAllocation createRoomnumberAllocation(RoomNumberAllocationDTO rnadto);

	List<RoomNumberAllocationDTO> getFetchAllRNA();

	RoomNumberAllocationDTO getUpdateAllocation(RoomNumberAllocationDTO allocationdto);

}