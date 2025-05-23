package hotel.edu.service;

import hotel.edu.dto.RoomLocationSetUpDTO;
import hotel.edu.model.RoomLocationSetUp;
import hotel.edu.model.User;
import hotel.edu.repository.RoomLocationSetUpRepository;
import hotel.edu.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomLocationSetUpServiceImp implements RoomLocationSetUpService {

	@Autowired
    private  RoomLocationSetUpRepository roomLocationSetUpRepository;
	@Autowired
	private UserRepository userRepository;

	@Override
	public RoomLocationSetUp createRoomLocationSetUp(RoomLocationSetUpDTO roomlocationsetupDTO) {
		
		RoomLocationSetUp roomLSU= new RoomLocationSetUp();
		roomLSU.setCount(roomlocationsetupDTO.getCount());
		roomLSU.setDirection(roomlocationsetupDTO.getDirection());
		roomLSU.setFloorNumber(roomlocationsetupDTO.getFloorNumber());
		roomLSU.setCreatedBy(roomlocationsetupDTO.getCreatedBy());
		
		int userId=roomlocationsetupDTO.getUser().getUserId();
		User user=userRepository.findById(userId).orElse(null);
		roomLSU.setCreatedBy(userId);
		roomLSU.setUser(user);
		return roomLocationSetUpRepository.save(roomLSU);

	}

	@Override
	public List<RoomLocationSetUpDTO> getFetchAllrlsu() {

		List<RoomLocationSetUpDTO> dto=new ArrayList<>();
		List<RoomLocationSetUp> rlsu = roomLocationSetUpRepository.findAll();
		
		for(RoomLocationSetUp rlsus:rlsu) {
			RoomLocationSetUpDTO rlsudto = new RoomLocationSetUpDTO();
			rlsudto.setLocationId(rlsus.getLocationId());
			rlsudto.setCount(rlsus.getCount());
			rlsudto.setDirection(rlsus.getDirection());
		    rlsudto.setFloorNumber(rlsus.getFloorNumber());	
		    rlsudto.setCreatedBy(rlsus.getCreatedBy());
		    
		    dto.add(rlsudto);
		}
		
		return dto;
	}

	@Override
	public RoomLocationSetUpDTO getFetchIdLocation(int locationId) {
	 
		RoomLocationSetUpDTO dto=new RoomLocationSetUpDTO();
		RoomLocationSetUp rlsu = roomLocationSetUpRepository.findById(locationId).orElse(null);
		dto.setLocationId(rlsu.getLocationId());
		dto.setDirection(rlsu.getDirection());
		dto.setCount(rlsu.getCount());
		dto.setFloorNumber(rlsu.getFloorNumber());
		dto.setCreatedBy(rlsu.getCreatedBy());
		return dto;
	}
	
	

	
}
