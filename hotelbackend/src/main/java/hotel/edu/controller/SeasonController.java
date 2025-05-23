package hotel.edu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import hotel.edu.dto.SeasonDTO;
import hotel.edu.model.Role;
import hotel.edu.model.Season;
import hotel.edu.service.RoleService;
import hotel.edu.service.SeasonService;

@RestController
public class SeasonController {

	@Autowired
	private SeasonService seasonService;
	
	
	@PostMapping("/createSeason")
	public String getCreate(@RequestBody SeasonDTO seasonDTO){
		
		SeasonDTO season1=seasonService.getCreate(seasonDTO);
		 
		return "Season created Succussfully";
		
	}
}
