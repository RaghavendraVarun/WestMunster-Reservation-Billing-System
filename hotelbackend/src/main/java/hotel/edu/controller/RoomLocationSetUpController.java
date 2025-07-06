package hotel.edu.controller;

import java.util.List;
import java.util.Map;

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

import hotel.edu.dto.RoomLocationSetUpDTO;
import hotel.edu.dto.RoomlocationfetchallDto;
import hotel.edu.dto.RoomlocationupdateDto;
import hotel.edu.dto.UserDTO;
import hotel.edu.model.RoomLocationSetUp;
import hotel.edu.model.RoomType;
import hotel.edu.repository.RoomTypeReposiotry;
import hotel.edu.service.RoomLocationSetUpService;
@CrossOrigin("*")
@RestController
public class RoomLocationSetUpController {
	@Autowired
	private RoomLocationSetUpService roomlocationsetupservice;
	
	@Autowired RoomTypeReposiotry roomTypeReposiotry;
	RoomLocationSetUpDTO roomLocationDTO=new RoomLocationSetUpDTO();
	@PostMapping("/createroomlocation")
	public ResponseEntity<Map<String, Object>> createRoomLocationSetUp(@RequestBody RoomLocationSetUpDTO roomlocationsetupDTO) {
		 System.out.println("Received payload: " + roomLocationDTO);
	    return roomlocationsetupservice.createRoomLocationSetUp(roomlocationsetupDTO);
	}
	@GetMapping("/getFetchAllroomlsu")
	public ResponseEntity<List<RoomlocationfetchallDto>> getFetchAllrlsu(){
		List<RoomlocationfetchallDto> rlsuDto=roomlocationsetupservice.getFetchAllrlsu();
		return new ResponseEntity<>(rlsuDto,HttpStatus.OK);
	}

	@GetMapping("/fetchIdrlsu/{locationId}")
	public ResponseEntity<RoomlocationfetchallDto> getFetchIdLocation(@PathVariable int locationId) {
		RoomlocationfetchallDto dto = roomlocationsetupservice.getFetchIdLocation(locationId);
	    return new ResponseEntity<>(dto, HttpStatus.OK);
	}

//	@PutMapping("/updateRoomlocation/{locationId}")
//	public ResponseEntity<Object> updateRoomlocationSetup(@RequestBody RoomlocationupdateDto roomlocationupdateDto ,@PathVariable int locationId){
//		
//		Object roomDto=roomlocationsetupservice.updateRoomlocationSetup(locationId,roomlocationupdateDto);
//		
//		return new ResponseEntity<>(roomDto,HttpStatus.OK);
//	}
	
	@PutMapping("/updateRoomLocation/{locationId}")
	public ResponseEntity<String> updateRoomlocationSetup(@RequestBody RoomlocationupdateDto roomlocationupdateDto ,@PathVariable int locationId){
		
		Object roomDto=roomlocationsetupservice.updateRoomlocationSetup(locationId,roomlocationupdateDto);
		
		return new ResponseEntity<>("Update Successfully",HttpStatus.OK);
	}

	  
}