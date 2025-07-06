package hotel.edu.serviceimpl;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import hotel.edu.dto.SeasonDTO;
import hotel.edu.dto.SeasonDetailsDTO;
import hotel.edu.dto.SeasonUpdateDTO;
import hotel.edu.model.Role;
import hotel.edu.model.RoomType;
import hotel.edu.model.Season;
import hotel.edu.model.User;
import hotel.edu.repository.RoomTypeReposiotry;
import hotel.edu.repository.SeasonRepository;
import hotel.edu.repository.UserRepository;
import hotel.edu.service.SeasonService;

@Service
public class SeasonServiceImplement implements SeasonService{
	
	@Autowired
	private SeasonRepository seasonRepository;
	
	@Autowired
	private RoomTypeReposiotry roomtypeRepository;
	
	@Autowired
	private UserRepository userRepository;

//	@Override
//	public SeasonDTO getCreate(SeasonDTO seasonDTO) {
//		Season season=new Season();
////		int userId=seasonDTO.getUser().getUserId();
////		User user=userRepository.findById(userId).orElse(null);
//		
//	//	seasonDTO.setUser(user);
//		
//	
//		season.setSeasonName(seasonDTO.getSeasonName());
//		season.setPrice(seasonDTO.getPrice());
//		season.setStartDate(seasonDTO.getStartDate());
//		season.setEndDate(seasonDTO.getEndDate());
//		 if (seasonDTO.getRoomTypeId() != null) {
//		        RoomType roomType = roomtypeRepository.findById(seasonDTO.getRoomTypeId())
//		            .orElseThrow(() -> new RuntimeException("RoomType not found with id: " + seasonDTO.getRoomTypeId()));
//		        season.setRoomType(roomType);
//		    }
//		seasonDTO.setCreatedBy(season.getCreatedBy());
//		
//		Season s1=seasonRepository.save(season);
//		return seasonDTO;
//	}
	
	@Override
	public Object getCreate(SeasonDTO seasonDTO) {
		Map<String, Object> map = new HashMap<>();
		Season season=new Season();
		
		Integer sea = seasonRepository.findSeasonName(seasonDTO.getSeasonName());
		if(sea > 0) {
			map.put("status", "error");
		    map.put("message", "season name already exists");	
		    return map;
		}
		season.setSeasonName(seasonDTO.getSeasonName());
		season.setPrice(seasonDTO.getPrice());
		season.setStartDate(seasonDTO.getStartDate());
		season.setEndDate(seasonDTO.getEndDate());
		 if (seasonDTO.getRoomTypeId() != null) {
		        RoomType roomType = roomtypeRepository.findById(seasonDTO.getRoomTypeId())
		            .orElseThrow(() -> new RuntimeException("RoomType not found with id: " + seasonDTO.getRoomTypeId()));
		        season.setRoomType(roomType);
		    }
		 User user = userRepository.findById(seasonDTO.getUserId()).orElse(null);
		 season.setUser(user);
		 season.setCreatedBy(seasonDTO.getUserId());
		
		seasonRepository.save(season);
		map.put("status", "success");
	    map.put("message", "season created successfully");	
	    return map;
	}

	@Override
	public Object getFetchIdSeason(int seasonId) {
		
		SeasonDetailsDTO seasondto=new SeasonDetailsDTO();
		Season season=seasonRepository.findById(seasonId).orElse(null);
		
    	seasondto.setSeasonId(season.getSeasonId());
		seasondto.setSeasonName(season.getSeasonName());
		seasondto.setPrice(season.getPrice());
		seasondto.setStartDate(season.getStartDate());
		seasondto.setEndDate(season.getEndDate());
		seasondto.setCreatedBy(season.getCreatedBy());
     // seasondto.setUpdatedBy(season.getUser().getUpdatedBy());
	//	seasondto.setCreatedDate(season.getCreatedDate());
	//	seasondto.setUpdateDate(season.getUpdateDate());
		
		return seasondto;
	}

	@Override
	public List<SeasonDetailsDTO> getFetchAllSeasons() {
		
		List<SeasonDetailsDTO> seasondtolist=new ArrayList<>();
		List<Season> seasonlist=seasonRepository.findAll();
		
		for (Season season:seasonlist) {
			SeasonDetailsDTO seasondto=new SeasonDetailsDTO();
			
	     	seasondto.setSeasonId(season.getSeasonId());
			seasondto.setSeasonName(season.getSeasonName());
			seasondto.setPrice(season.getPrice());
			seasondto.setStartDate(season.getStartDate());
			seasondto.setEndDate(season.getEndDate());
			seasondto.setCreatedBy(season.getCreatedBy());
        //  seasondto.setUpdatedBy(season.getUpdatedBy());
		//	seasondto.setCreatedDate(season.getCreatedDate());
		//	seasondto.setUpdateDate(season.getUpdateDate());
			
			seasondtolist.add(seasondto);
		}
		
		return seasondtolist;
	}

	@Override
	public SeasonUpdateDTO getupdateIdSeason(int seasonId,SeasonUpdateDTO seasonDTO) {
		Season season=seasonRepository.findById(seasonId).orElse(null);
		season.setStartDate(season.getStartDate());
		season.setEndDate(seasonDTO.getEndDate());
		season.setPrice(seasonDTO.getPrice());
		season.setSeasonName(seasonDTO.getSeasonName());
		season.setUpdatedBy(seasonDTO.getUpdateddBy());
		
		seasonRepository.save(season);
		
		return seasonDTO;
	}
	
}
