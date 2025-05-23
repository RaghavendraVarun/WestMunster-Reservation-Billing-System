package hotel.edu.service;

import java.util.List;

import hotel.edu.dto.SeasonDTO;
import hotel.edu.model.Role;
import hotel.edu.model.Season;

public interface SeasonService {

	SeasonDTO getCreate(SeasonDTO seasondto);

	SeasonDTO getFetchIdSeason(int seasonId);

	List<SeasonDTO> getFetchAllSeasons();
	

}
