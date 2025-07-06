package hotel.edu.serviceimpl;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hotel.edu.dto.RoomTypeDTO;
import hotel.edu.dto.RoomTypeDatePriceDTO;
import hotel.edu.dto.RoomtypenameDTO;
import hotel.edu.dto.UpdateRoomTypeDTO;
import hotel.edu.model.Amenities;
import hotel.edu.model.RoomLocationSetUp;
import hotel.edu.model.RoomType;
import hotel.edu.model.Season;
import hotel.edu.model.User;
import hotel.edu.repository.RoomTypeReposiotry;
import hotel.edu.repository.UserRepository;
import hotel.edu.service.RoomTypeService;

@Service
public class RoomTypeServiceImplement implements RoomTypeService {

	@Autowired
	private RoomTypeReposiotry roomtyperepository;

	@Autowired
	private UserRepository UserRepository;

	@Override
	public Object createRoomType(RoomTypeDTO roomtypedto) {

		Map<String, Object> map = new HashMap<>();
		RoomType roomtype = new RoomType();
		Integer roomTypeName = roomtyperepository.getRoomTypeName(roomtypedto.getRoomTypeName());
		if (roomTypeName > 0) {
			map.put("status", "error");
			map.put("message", "RoomType Name already exists");
			return map;
		}
		roomtype.setRoomTypeName(roomtypedto.getRoomTypeName());
		roomtype.setTotalRoom(roomtypedto.getTotalRoom());
		roomtype.setCapacity(roomtypedto.getCapacity());

		int userId = roomtypedto.getUserId();
		User user = UserRepository.findById(userId).orElse(null);
		roomtype.setCreatedBy(userId);
		roomtype.setUser(user);

		roomtyperepository.save(roomtype);
		map.put("status", "success");
		map.put("message", "RoomType created successfully");

		return map;
	}

	@Override
	public List<RoomTypeDTO> getAllRoomType() {

		List<RoomTypeDTO> roomdto = new ArrayList<>();
		List<RoomType> roomtypes = roomtyperepository.findAll();
		for (RoomType r : roomtypes) {
			RoomTypeDTO roomtypedto = new RoomTypeDTO();
			roomtypedto.setRoomTypeId(r.getRoomTypeId());
			roomtypedto.setRoomTypeName(r.getRoomTypeName());
			roomtypedto.setTotalRoom(r.getTotalRoom());
			roomtypedto.setCapacity(r.getCapacity());
//			roomtypedto.setCreatedBy(r.getCreatedBy());
			roomdto.add(roomtypedto);
		}
		return roomdto;
	}

	@Override
	public RoomTypeDTO getroomTypebyId(int roomtypeId) {
		// TODO Auto-generated method stub
		RoomType room = roomtyperepository.findById(roomtypeId).orElse(null);
		RoomTypeDTO roomdto = new RoomTypeDTO();
		 roomdto.setRoomTypeId(room.getRoomTypeId());
		roomdto.setRoomTypeName(room.getRoomTypeName());
		roomdto.setTotalRoom(room.getTotalRoom());
		roomdto.setCapacity(room.getCapacity());
		return roomdto;
	}

	@Override
	public Object roomTypeUpdate(int roomTypeId, UpdateRoomTypeDTO updateDTO) {
		// TODO Auto-generated method stub
		RoomType roomtype = roomtyperepository.findById(roomTypeId).orElse(null);
		roomtype.setRoomTypeName(updateDTO.getRoomTypeName());
		roomtype.setCapacity(updateDTO.getCapacity());
		roomtype.setTotalRoom(updateDTO.getTotalRoom());
		roomtype.setUpdateBy(updateDTO.getUpdatedBy());

		return roomtyperepository.save(roomtype);

	}

	@Override
	public Object roomTypeDropDown() {
		List<RoomType> roomtypes = roomtyperepository.findAll();
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		for (RoomType r : roomtypes) {
			Map<String, Object> map = new HashMap<>();
			map.put("RoomTypeId", r.getRoomTypeId());
			map.put("RoomTypeName", r.getRoomTypeName());
			list.add(map);
		}
		return list;
	}

	@Override
	public List<RoomtypenameDTO> getFetchAllRoomType(String roomTypeName) {
	    List<RoomtypenameDTO> roomdto = new ArrayList<>();
	    List<RoomType> roomtypes = roomtyperepository.findByRoomTypeName(roomTypeName);
	    
	    LocalDate currentDate = LocalDate.now();
	    
	    for (RoomType r : roomtypes) {
	        RoomtypenameDTO roomtypedto = new RoomtypenameDTO();
	        roomtypedto.setRoomTypeName(r.getRoomTypeName());
	        roomtypedto.setTotalRoom(r.getTotalRoom());
	        roomtypedto.setCapacity(r.getCapacity());
	        roomtypedto.setRoomTypeId(r.getRoomTypeId());
	        
	   //     roomtypedto.setPrice(0.0); 
	        roomtypedto.setSeasonName("Standard");
	        
	        if (r.getSeasons() != null && !r.getSeasons().isEmpty()) {
	            for (Season season : r.getSeasons()) {
//	                if (currentDate >= season.getStartDate() && currentDate <= season.getEndDate()) {                  
	                    roomtypedto.setPrice(season.getPrice());
	                    roomtypedto.setSeasonName(season.getSeasonName());
	                    break; 
//	                }
	            }
	        }
	        
	        roomdto.add(roomtypedto);
	    }
	    return roomdto;
	}

	@Override
	public List<RoomtypenameDTO> getfetchallprice(String roomTypeName) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<RoomTypeDatePriceDTO> getFetchAllPrice(String roomTypeName) {
		// TODO Auto-generated method stub
		return null;
	}
	
	

}