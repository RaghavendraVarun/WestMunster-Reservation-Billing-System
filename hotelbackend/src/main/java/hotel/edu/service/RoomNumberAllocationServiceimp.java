package hotel.edu.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import hotel.edu.dto.RoomLocationSetUpDTO;
import hotel.edu.dto.RoomNumberAllocationDTO;
import hotel.edu.model.RoomLocationSetUp;
import hotel.edu.model.RoomNumberAllocation;
import hotel.edu.model.User;
import hotel.edu.repository.RoomNumberAllocationRepository;
import hotel.edu.repository.UserRepository;

public class RoomNumberAllocationServiceimp implements RoomNumberAllocationService{
	
	@Autowired
	private RoomNumberAllocationRepository roomnumberallocationRepository;
	@Autowired
	private UserRepository userRepository;
	
	
	@Override
	public RoomNumberAllocation createRoomnumberAllocation(RoomNumberAllocationDTO rnadto) {

		RoomNumberAllocation roomNA=new RoomNumberAllocation();
		roomNA.setLandLineNumber(rnadto.getLandLineNumber());
		roomNA.setRoomNumber(rnadto.getRoomNumber());
		
		int userId=rnadto.getUser().getUserId();
		User user=userRepository.findById(userId).orElse(null);
		roomNA.setCreatedBy(userId);
		roomNA.setUser(user);
		return roomnumberallocationRepository.save(roomNA);
	}

	@Override
	public List<RoomNumberAllocationDTO> getFetchAllRNA() {
		// TODO Auto-generated method stub
		List<RoomNumberAllocationDTO> dto=new ArrayList<>();
		List<RoomNumberAllocation> rlsu = roomnumberallocationRepository.findAll();
		
		for(RoomNumberAllocation rlsus:rlsu) {
			RoomNumberAllocationDTO rlsudto = new RoomNumberAllocationDTO();
			rlsudto.setLandLineNumber(rlsus.getLandLineNumber());
			rlsudto.setRoomNumber(rlsus.getRoomNumber());
		    rlsudto.setCreatedBy(rlsus.getCreatedBy());
		    
		    dto.add(rlsudto);
		}
		
		return dto;
	}

	@Override
	public RoomNumberAllocationDTO getFetchIdRoomnumber(int roomId) {
		RoomNumberAllocationDTO dto=new RoomNumberAllocationDTO();
		RoomNumberAllocation rlsu = roomnumberallocationRepository.findById(roomId).orElse(null);
		dto.setLandLineNumber(rlsu.getLandLineNumber());
		dto.setRoomNumber(rlsu.getRoomNumber());
		dto.setCreatedBy(rlsu.getCreatedBy());
		return dto;
	}

}
