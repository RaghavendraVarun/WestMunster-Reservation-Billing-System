package hotel.edu.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hotel.edu.dto.SeasonDTO;
import hotel.edu.model.Role;
import hotel.edu.model.Season;
import hotel.edu.model.User;
import hotel.edu.repository.RoomTypeReposiotry;
import hotel.edu.repository.SeasonRepository;
import hotel.edu.repository.UserRepository;

@Service
public class SeasonServiceImplement implements SeasonService{
	
	@Autowired
	private SeasonRepository seasonRepository;
	
	@Autowired
	private RoomTypeReposiotry roomtypeRepository;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public SeasonDTO getCreate(SeasonDTO seasonDTO) {
		Season season=new Season();
		int userId=seasonDTO.getUser().getUserId();
		User user=userRepository.findById(userId).orElse(null);
		
		seasonDTO.setUser(user);
		
		season.setSeasonName(seasonDTO.getSeasonName());
		season.setPrice(seasonDTO.getPrice());
		season.setStartDate(seasonDTO.getStartDate());
		season.setEndDate(seasonDTO.getEndDate());
		seasonDTO.setCreatedBy(userId);
		
		Season s1=seasonRepository.save(season);
		return seasonDTO;
	}

	@Override
	public SeasonDTO getFetchIdSeason(int seasonId) {
		SeasonDTO seasondto=new SeasonDTO();
		Season season=seasonRepository.findById(seasonId).orElse(null);
		
		
		
		seasondto.setSeasonId(season.getSeasonId());
		seasondto.setSeasonName(season.getSeasonName());
		seasondto.setPrice(season.getPrice());
		seasondto.setStartDate(season.getStartDate());
		seasondto.setEndDate(season.getEndDate());
		seasondto.setCreatedBy(season.getUser().getUserId());
		seasondto.setUpdatedBy(season.getUpdatedBy());
		seasondto.setCreatedDate(season.getCreatedDate());
		seasondto.setUpdateDate(season.getUpdateDate());
		
		return seasondto;
	}

	@Override
	public List<SeasonDTO> getFetchAllSeasons() {
		
		List<SeasonDTO> seasondtolist=new ArrayList<>();
		List<Season> seasonlist=seasonRepository.findAll();
		for (Season season:seasonlist) {
			SeasonDTO seasondto=new SeasonDTO();
			seasondto.setSeasonId(season.getSeasonId());
			seasondto.setSeasonName(season.getSeasonName());
			seasondto.setPrice(season.getPrice());
			seasondto.setStartDate(season.getStartDate());
			seasondto.setEndDate(season.getEndDate());
			seasondto.setCreatedBy(season.getUser().getUserId());
			seasondto.setUpdatedBy(season.getUpdatedBy());
			seasondto.setCreatedDate(season.getCreatedDate());
			seasondto.setUpdateDate(season.getUpdateDate());
			
			seasondtolist.add(seasondto);
		}
		
		return seasondtolist;
	}
	
}
