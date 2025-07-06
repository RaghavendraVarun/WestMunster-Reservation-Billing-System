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
import hotel.edu.model.RoomNumberAllocation;
import hotel.edu.service.RoomNumberAllocationService;
@CrossOrigin
@RestController
public class RoomNumberAllocationController {
	
	@Autowired
	private RoomNumberAllocationService roomnumberallocationservice;
	
	@PostMapping("/createroomnumber")
	   public ResponseEntity<String> createRoomnumberAllocation(@RequestBody RoomNumberAllocationDTO rnadto) {
		RoomNumberAllocation rlsu = roomnumberallocationservice.createRoomnumberAllocation(rnadto);
	       return new ResponseEntity<>("RoomnumberAllocation completed successfully", HttpStatus.CREATED);
	}
	
	@GetMapping("/fetchroomnumbers")
	public ResponseEntity<List<RoomNumberAllocationDTO>> getFetchAllRNA(){
		List<RoomNumberAllocationDTO> rlsuDto=roomnumberallocationservice.getFetchAllRNA();
		return new ResponseEntity<>(rlsuDto,HttpStatus.OK);
	}
	@GetMapping("/fetchbyIdrlsu/{roomId}")
	public ResponseEntity<RoomNumberAllocationDTO > getFetchIdRoomnumber(@PathVariable int roomId){
		
		RoomNumberAllocationDTO dto=roomnumberallocationservice.getFetchIdRoomnumber(roomId);
		return new ResponseEntity<>(dto,HttpStatus.OK);		
	}
	
	
	@PutMapping("/updateAllocation")
	   public ResponseEntity<String> getUpdateAllocation(@RequestBody RoomNumberAllocationDTO allocationdto){
	   RoomNumberAllocationDTO allocation1=roomnumberallocationservice.getUpdateAllocation(allocationdto);
	   return new ResponseEntity<>("Updated successfully",HttpStatus.OK);
	}
	
}