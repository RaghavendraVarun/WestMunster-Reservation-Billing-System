package hotel.edu.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hotel.edu.dto.RoomTypeDTO;
import hotel.edu.model.RoomType;
import hotel.edu.repository.RoomTypeReposiotry;

@Service
public class RoomTypeServiceImplement implements RoomTypeService {
	
	@Autowired
	private RoomTypeReposiotry roomtyperepository;

	@Override
	public RoomType createRoomType(RoomTypeDTO roomtypedto) {
		// TODO Auto-generated method stub
		RoomType roomtype=new RoomType();
		roomtype.setRoomTypeId(roomtypedto.getRoomTypeId());
		roomtype.setRoomTypeName(roomtypedto.getRoomTypeName());
		roomtype.setTotalRoom(roomtypedto.getTotalRoom());
		roomtype.setCapacity(roomtypedto.getCapacity());
		roomtype.setCreatedBy(roomtypedto.getCreatedBy());
		
		return roomtyperepository.save(roomtype);
	}

	@Override
	public List<RoomTypeDTO> getAllRoomType() {
		// TODO Auto-generated method stub
		List<RoomTypeDTO> roomdto=new ArrayList<>();
		List<RoomType> roomtypes=roomtyperepository.findAll();
		
		for(RoomType r:roomtypes) {
			RoomTypeDTO roomtypedto=new RoomTypeDTO();
			roomtypedto.setRoomTypeId(r.getRoomTypeId());
			roomtypedto.setRoomTypeName(r.getRoomTypeName());	
			roomtypedto.setTotalRoom(r.getTotalRoom());
			roomtypedto.setCapacity(r.getCapacity());
			roomtypedto.setCreatedBy(r.getCreatedBy());
			roomdto.add(roomtypedto);
		}

		return roomdto;
	}

	@Override
	public RoomTypeDTO getroomTypebyId(int roomtypeId) {
		// TODO Auto-generated method stub
		
		RoomType room=roomtyperepository.findById(roomtypeId).orElse(null);
		RoomTypeDTO roomdto=new RoomTypeDTO();
		
		roomdto.setRoomTypeId(room.getRoomTypeId());
		roomdto.setRoomTypeName(room.getRoomTypeName());
		roomdto.setTotalRoom(room.getTotalRoom());
		roomdto.setCapacity(room.getCapacity());
		return roomdto;
		
	}
	

}
