package hotel.edu.serviceimpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hotel.edu.dto.RoomLocationSetUpDTO;
import hotel.edu.dto.RoomNumberAllocationDTO;
import hotel.edu.model.RoomLocationSetUp;
import hotel.edu.model.RoomNumberAllocation;
import hotel.edu.model.RoomType;
import hotel.edu.model.User;
import hotel.edu.repository.RoomLocationSetUpRepository;
import hotel.edu.repository.RoomNumberAllocationRepository;
import hotel.edu.repository.UserRepository;
import hotel.edu.service.RoomNumberAllocationService;

@Service
public class RoomNumberAllocationServiceimp implements RoomNumberAllocationService{
	
	@Autowired
	private RoomNumberAllocationRepository roomnumberallocationRepository;
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoomLocationSetUpRepository roomLocationSetUpRepository;
	
	
	@Override
	public RoomNumberAllocation createRoomnumberAllocation(RoomNumberAllocationDTO rnadto) {

//		RoomNumberAllocation roomNA=new RoomNumberAllocation();
//		roomNA.setLandLineNumber(rnadto.getLandLineNumber());
//		roomNA.setRoomNumber(rnadto.getRoomNumber());
//		
//		int userId=rnadto.getUserId();
//		User user=userRepository.findById(userId).orElse(null);
//		roomNA.setCreatedBy(userId);
//		roomNA.setUser(user);
//		
//		RoomLocationSetUp location=roomLocationSetUpRepository.findById(rnadto.getLocationId()).orElse(null);
//		roomNA.setRoomLocationSetUp(location);
//		return roomnumberallocationRepository.save(roomNA);
		return null;
	}
//
	@Override
	public List<RoomNumberAllocationDTO> getFetchAllRNA() {
		// TODO Auto-generated method stub
		List<RoomNumberAllocationDTO> dto=new ArrayList<>();
		List<RoomNumberAllocation> rlsu = roomnumberallocationRepository.findAll();
		
		for(RoomNumberAllocation rlsus:rlsu) {
			RoomNumberAllocationDTO rlsudto = new RoomNumberAllocationDTO();
			rlsudto.setLandLineNumber(rlsus.getLandLineNumber());
			rlsudto.setRoomNumber(rlsus.getRoomNumber());
			rlsudto.setDirection(rlsus.getRoomLocationSetUp().getDirection());
			rlsudto.setFloorNumber(rlsus.getRoomLocationSetUp().getFloorNumber());
			rlsudto.setRoomTypeName(rlsus.getRoomLocationSetUp().getRoomType().getRoomTypeName());
			rlsudto.setRoomId(rlsus.getRoomId());
		    dto.add(rlsudto);
		}
		
		return dto;
	}

	
//	@Override
//	public List<RoomNumberAllocationDTO> getFetchAllRNA() {
//	    // Use JOIN FETCH to load all relationships in a single query
//	    List<RoomNumberAllocation> allocations = roomnumberallocationRepository.findAllWithLocationAndType();
//	    
//	    return allocations.stream()
//	        .map(this::convertToDto)
//	        .collect(Collectors.toList());
//	}
//
//	private RoomNumberAllocationDTO convertToDto(RoomNumberAllocation allocation) {
//	    RoomNumberAllocationDTO dto = new RoomNumberAllocationDTO();
//	    dto.setLandLineNumber(allocation.getLandLineNumber());
//	    dto.setRoomNumber(allocation.getRoomNumber());
//	    
//	    // Handle null checks safely
//	    RoomLocationSetUp location = allocation.getRoomLocationSetUp();
//	    if (location != null) {
//	        dto.setDirection(location.getDirection());
//	        dto.setFloorNumber(location.getFloorNumber());
//	        
//	        // Handle room type
//	        RoomType roomType = location.getRoomType();
//	        dto.setRoomTypeName(roomType != null ? roomType.getRoomTypeName() : "Not Specified");
//	    } else {
//	        dto.setDirection("Not Available");
//	        dto.setFloorNumber(0);
//	        dto.setRoomTypeName("Not Available");
//	    }
//	    
//	    return dto;
//	}
	@Override
	public RoomNumberAllocationDTO getFetchIdRoomnumber(int roomId) {
		RoomNumberAllocationDTO dto=new RoomNumberAllocationDTO();
		RoomNumberAllocation rlsu = roomnumberallocationRepository.findById(roomId).orElse(null);
		dto.setLandLineNumber(rlsu.getLandLineNumber());
		dto.setRoomNumber(rlsu.getRoomNumber());
		dto.setLocationId(rlsu.getRoomLocationSetUp().getLocationId());
		dto.setRoomId(rlsu.getRoomId());
		dto.setUserId(rlsu.getUser().getUserId());
//		dto.setCreatedBy(rlsu.getCreatedBy());
		return dto;
	}
	
	@Override
	public RoomNumberAllocationDTO getUpdateAllocation(RoomNumberAllocationDTO allocationdto) {
		RoomNumberAllocation rlsu = roomnumberallocationRepository.findById(allocationdto.getRoomId()).orElse(null);
		rlsu.setRoomId(allocationdto.getRoomId());
		rlsu.setRoomNumber(allocationdto.getRoomNumber());
		rlsu.setLandLineNumber(allocationdto.getLandLineNumber());
		int userId=allocationdto.getUserId();
		rlsu.setUpdateBy(userId);
		
		RoomNumberAllocation roomallocation1=roomnumberallocationRepository.saveAndFlush(rlsu);
		
		return allocationdto;
	}

}