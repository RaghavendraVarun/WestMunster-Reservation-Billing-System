package hotel.edu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import hotel.edu.dto.RoomNumberAllocationDTO;
import hotel.edu.dto.SeasonDTO;
import hotel.edu.dto.SeasonDetailsDTO;
import hotel.edu.dto.SeasonUpdateDTO;
import hotel.edu.dto.UserDTO;
import hotel.edu.model.Role;
import hotel.edu.model.Season;
import hotel.edu.service.RoleService;
import hotel.edu.service.SeasonService;
@CrossOrigin("*")
@RestController
public class SeasonController {

	@Autowired
	private SeasonService seasonService;
	
	
	@PostMapping("/createSeason")
	public Object getCreate(@RequestBody SeasonDTO seasonDTO){
		return seasonService.getCreate(seasonDTO);
	}
	
	
	@GetMapping("/fetchIdSeason/{seasonId}")
	public Object getFetchIdUser(@PathVariable int seasonId){
		return seasonService.getFetchIdSeason(seasonId);
		 
	}
	
	
	@GetMapping("/getFetchAllSeasons")
	public ResponseEntity<List<SeasonDetailsDTO>> getFetchAllUser(){
		List<SeasonDetailsDTO> seasonDto=seasonService.getFetchAllSeasons();
		return new ResponseEntity<>(seasonDto,HttpStatus.OK);
	}
	@PutMapping("/seasonupdateId/{seasonId}")
	public Object getupdateIdSeason(@PathVariable int seasonId,@RequestBody SeasonUpdateDTO seasonDTO){
		
		 return seasonService.getupdateIdSeason(seasonId,seasonDTO);
	}
}
