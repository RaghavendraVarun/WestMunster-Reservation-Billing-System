package hotel.edu.serviceimpl;

import hotel.edu.dto.CreateRoomSetUpDTO;
import hotel.edu.dto.RoomLocationSetUpDTO;
import hotel.edu.dto.RoomlocationfetchallDto;
import hotel.edu.dto.RoomlocationupdateDto;
import hotel.edu.model.RoomLocationSetUp;
import hotel.edu.model.RoomNumberAllocation;
import hotel.edu.model.RoomType;
import hotel.edu.model.User;
import hotel.edu.repository.RoomLocationSetUpRepository;
import hotel.edu.repository.RoomNumberAllocationRepository;
import hotel.edu.repository.RoomTypeReposiotry;
import hotel.edu.repository.UserRepository;
import hotel.edu.service.RoomLocationSetUpService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
//import org.springframework.stereotype.Service;

@Service
public class RoomLocationSetUpServiceImp implements RoomLocationSetUpService {

	@Autowired
	private RoomNumberAllocationRepository roomNumberAllocationRepository;

	@Autowired
	private RoomLocationSetUpRepository roomLocationSetUpRepository;
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoomTypeReposiotry roomTypeReposiotry;

	@Override
	public ResponseEntity<Map<String, Object>> createRoomLocationSetUp(RoomLocationSetUpDTO roomlocationsetupDTO) {
		Map<String, Object> response = new HashMap<>();
	    RoomLocationSetUp roomLSU = new RoomLocationSetUp();
	    RoomType roomtype=roomTypeReposiotry.findById(roomlocationsetupDTO.getRoomTypeId()).orElse(null);
	    Integer totalRoomCount = roomLocationSetUpRepository.getTotalCountByRoomTypeId(roomtype.getRoomTypeId());
	    if (totalRoomCount == null) {
	        totalRoomCount = 0;
	    }
	    if(roomtype.getTotalRoom()- totalRoomCount < roomlocationsetupDTO.getCount())
	    {
	    response.put("status", "error");
        response.put("message", "Room location setup not possible of this type");
        return ResponseEntity.status(HttpStatus.OK).body(response);
        
	    }
	    roomLSU.setCount(roomlocationsetupDTO.getCount());
	    roomLSU.setDirection(roomlocationsetupDTO.getDirection());
	    roomLSU.setFloorNumber(roomlocationsetupDTO.getFloorNumber());
	    
	    Integer userId= roomlocationsetupDTO.getUserId();
	    roomLSU.setCreatedBy(userId);
	    User user = userRepository.findById(userId)
	        .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
	    roomLSU.setUser(user);

	    RoomType room = roomTypeReposiotry.findById(roomlocationsetupDTO.getRoomTypeId())
	        .orElseThrow(() -> new RuntimeException("RoomType not found"));

	    roomLSU.setRoomType(room);

	    roomLSU = roomLocationSetUpRepository.save(roomLSU);

	    String firstLetter = room.getRoomTypeName().substring(0, 1).toUpperCase();
	    Integer floorNumber = roomLSU.getFloorNumber();
	    int count = roomlocationsetupDTO.getCount();

	    for (int i = 1; i <= count; i++) {
	       RoomNumberAllocation rna = new RoomNumberAllocation();
	       rna.setCreatedBy(userId);
	       rna.setUser(user);

	       String roomNumber = firstLetter + floorNumber + String.format("%02d", i);
	       rna.setRoomNumber(roomNumber);
	       rna.setRoomLocationSetUp(roomLSU);
	       roomNumberAllocationRepository.save(rna);
	    }

	    response.put("status", "success");
        response.put("message", "Room location setup created successfully");
        response.put("roomLocationSetUpId", roomLSU.getLocationId());
      
        
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
		

	}

	@Override
	public List<RoomlocationfetchallDto> getFetchAllrlsu() {

		List<RoomlocationfetchallDto> dto = new ArrayList<>();
		List<RoomLocationSetUp> rlsu = roomLocationSetUpRepository.findAll();

		for (RoomLocationSetUp rlsus : rlsu) {
			RoomlocationfetchallDto rlsudto = new RoomlocationfetchallDto();
			rlsudto.setCount(rlsus.getCount());
			rlsudto.setDirection(rlsus.getDirection());
			rlsudto.setFloorNumber(rlsus.getFloorNumber());
			rlsudto.setRoomTypeId(rlsus.getRoomType().getRoomTypeId());
			rlsudto.setRoomTypeName(rlsus.getRoomType().getRoomTypeName());
			rlsudto.setLocationId(rlsus.getLocationId());
			rlsudto.setUserId(rlsus.getUser().getUserId());

			dto.add(rlsudto);
		}

		return dto;
	}

	@Override
	public RoomlocationfetchallDto getFetchIdLocation(int locationId) {

		RoomlocationfetchallDto dto = new RoomlocationfetchallDto();
		RoomLocationSetUp rlsu = roomLocationSetUpRepository.findById(locationId).orElse(null);
		dto.setLocationId(rlsu.getLocationId());
		dto.setDirection(rlsu.getDirection());
		dto.setCount(rlsu.getCount());
		dto.setRoomTypeId(rlsu.getRoomType().getRoomTypeId());
		dto.setRoomTypeName(rlsu.getRoomType().getRoomTypeName());
		dto.setFloorNumber(rlsu.getFloorNumber());
		dto.setDirection(rlsu.getDirection());
		dto.setUserId(rlsu.getUser().getUserId());
		return dto;
	}

//	@Override
//	public Object updateRoomlocationSetup(int locationId, RoomlocationupdateDto roomlocationupdateDto) {
//		
//		RoomLocationSetUp roomLocation=roomLocationSetUpRepository.findById(locationId).orElseThrow((()-> new RuntimeException("not found record")));
//		
//		roomLocation.setCount(roomlocationupdateDto.getCount());
//		roomLocation.setDirection(roomlocationupdateDto.getDirection());
//		roomLocation.setFloorNumber(roomlocationupdateDto.getFloorNumber());
//	
//		
//			roomLocationSetUpRepository.save(roomLocation);
//		
//		return roomLocation;
//	}

	@Override
	public Object updateRoomlocationSetup(int locationId, RoomlocationupdateDto roomlocationupdateDto) {

		RoomLocationSetUp roomLocation = roomLocationSetUpRepository.findById(locationId).orElse(null);

		roomLocation.setCount(roomlocationupdateDto.getCount());
		roomLocation.setDirection(roomlocationupdateDto.getDirection());
		roomLocation.setFloorNumber(roomlocationupdateDto.getFloorNumber());

		Integer userId = roomlocationupdateDto.getUserId();
		roomLocation.setUpdateBy(userId);
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
		roomLocation.setUser(user);

		RoomType room = roomTypeReposiotry.findById(roomlocationupdateDto.getRoomTypeId())
				.orElseThrow(() -> new RuntimeException("RoomType not found"));

		roomLocation.setRoomType(room);

		roomLocation = roomLocationSetUpRepository.saveAndFlush(roomLocation);

		String firstLetter = room.getRoomTypeName().substring(0, 1).toUpperCase();
		Integer floorNumber = roomLocation.getFloorNumber();
		Integer newCount = roomlocationupdateDto.getCount();
		Integer totalCount = roomLocationSetUpRepository.getRoomAllocationCount(locationId); // Existing room count

		if (newCount > totalCount) {
			for (int i = totalCount + 1; i <= newCount; i++) {
				RoomNumberAllocation rna = new RoomNumberAllocation();
				rna.setCreatedBy(userId);
				rna.setUser(user);
				String roomNumber = firstLetter + floorNumber + String.format("%02d", i);
				rna.setRoomNumber(roomNumber);
				rna.setRoomLocationSetUp(roomLocation);
				roomNumberAllocationRepository.save(rna);
			}
		} else if (newCount < totalCount) {
			Integer deleteCount = totalCount - newCount;
			PageRequest pageRequest = PageRequest.of(0, deleteCount);
			List<RoomNumberAllocation> extraRooms = roomNumberAllocationRepository
					.findRoomAllocationDeleteRecords(locationId, pageRequest);

			for (RoomNumberAllocation rooms : extraRooms) {
				roomNumberAllocationRepository.delete(rooms);
			}
		}

		return roomLocation;
	}

}