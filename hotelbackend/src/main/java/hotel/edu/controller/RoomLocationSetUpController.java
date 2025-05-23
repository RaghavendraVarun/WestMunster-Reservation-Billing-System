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

import hotel.edu.dto.RoomLocationSetUpDTO;
import hotel.edu.dto.UserDTO;
import hotel.edu.model.RoomLocationSetUp;
import hotel.edu.service.RoomLocationSetUpService;

@RestController
public class RoomLocationSetUpController {
	@Autowired
	private RoomLocationSetUpService roomlocationsetupservice;
	
	@PostMapping("/createroomlocation")
	   public ResponseEntity<String> createRoomLocationSetUp(@RequestBody RoomLocationSetUpDTO roomlocationsetupDTO) {
		RoomLocationSetUp  rlsu = roomlocationsetupservice.createRoomLocationSetUp(roomlocationsetupDTO);
	       return new ResponseEntity<>("roomLocationSetUp completed successfully", HttpStatus.CREATED);
	   }
	@GetMapping("/getFetchAllroomlsu")
	public ResponseEntity<List<RoomLocationSetUpDTO>> getFetchAllrlsu(){
		List<RoomLocationSetUpDTO> rlsuDto=roomlocationsetupservice.getFetchAllrlsu();
		return new ResponseEntity<>(rlsuDto,HttpStatus.OK);
	}
	@GetMapping("/fetchIdrlsu/{locationId}")
	public ResponseEntity<String > getFetchIdLocation(@PathVariable int locationId){
		
		RoomLocationSetUpDTO dto=roomlocationsetupservice.getFetchIdLocation(locationId);
		return new ResponseEntity<>("fetch successfully",HttpStatus.OK);		
	}
	
	  
}
