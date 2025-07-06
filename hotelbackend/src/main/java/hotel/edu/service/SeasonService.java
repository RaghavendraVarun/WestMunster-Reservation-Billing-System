package hotel.edu.service;

import java.util.List;

import hotel.edu.dto.SeasonDTO;
import hotel.edu.dto.SeasonDetailsDTO;
import hotel.edu.dto.SeasonUpdateDTO;
import hotel.edu.model.Role;
import hotel.edu.model.Season;

public interface SeasonService {

	Object getCreate(SeasonDTO seasondto);

	Object getFetchIdSeason(int seasonId);

	List<SeasonDetailsDTO> getFetchAllSeasons();

	Object getupdateIdSeason(int seasonId, SeasonUpdateDTO seasonDTO);



	

}
