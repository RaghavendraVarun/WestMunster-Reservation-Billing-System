package hotel.edu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import hotel.edu.dto.SeasonDTO;
import hotel.edu.dto.UserDTO;
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
	
	
	@GetMapping("/fetchIdSeason/{userId}")
	public ResponseEntity<String> getFetchIdUser(@PathVariable int seasonId){
		
		SeasonDTO dto=seasonService.getFetchIdSeason(seasonId);
		return new ResponseEntity<>("fetched season successfully",HttpStatus.OK);		
	}
	
	
	@GetMapping("/getFetchAllSeasons")
	public ResponseEntity<List<SeasonDTO>> getFetchAllUser(){
		List<SeasonDTO> seasonDto=seasonService.getFetchAllSeasons();
		return new ResponseEntity<>(seasonDto,HttpStatus.OK);
	}
}
