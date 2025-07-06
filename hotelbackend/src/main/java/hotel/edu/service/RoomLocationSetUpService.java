package hotel.edu.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import hotel.edu.dto.CreateRoomSetUpDTO;
import hotel.edu.dto.RoomLocationSetUpDTO;
import hotel.edu.dto.RoomlocationfetchallDto;
import hotel.edu.dto.RoomlocationupdateDto;
import hotel.edu.model.RoomLocationSetUp;


public interface RoomLocationSetUpService {

	List<RoomlocationfetchallDto> getFetchAllrlsu();

	RoomlocationfetchallDto getFetchIdLocation(int locationId);

	ResponseEntity<Map<String, Object>> createRoomLocationSetUp(RoomLocationSetUpDTO roomlocationsetupDTO);

	Object updateRoomlocationSetup(int locationId, RoomlocationupdateDto roomlocationupdateDto);

//	RoomLocationSetUpDTO getFetchIdLocation(int locationId);






	}