package hotel.edu.service;

import java.util.List;

import org.springframework.stereotype.Service;

import hotel.edu.dto.RoomLocationSetUpDTO;
import hotel.edu.model.RoomLocationSetUp;


public interface RoomLocationSetUpService {

	RoomLocationSetUp createRoomLocationSetUp(RoomLocationSetUpDTO roomlocationsetupDTO);


	List<RoomLocationSetUpDTO> getFetchAllrlsu();


	RoomLocationSetUpDTO getFetchIdLocation(int locationId);




	}


	


