package hotel.edu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import hotel.edu.dto.RoomNumberAllocationDTO;
import hotel.edu.model.RoomNumberAllocation;
import hotel.edu.service.RoomNumberAllocationService;


public class AllocationController {
	@Autowired
	private RoomNumberAllocationService roomnumberallocationservice;
	
	@PostMapping("/createroomlocation")
	   public ResponseEntity<String> createRoomnumberAllocation(@RequestBody RoomNumberAllocationDTO rnadto) {
		RoomNumberAllocation rlsu = roomnumberallocationservice.createRoomnumberAllocation(rnadto);
	       return new ResponseEntity<>("RoomnumberAllocation completed successfully", HttpStatus.CREATED);
	   }
	@GetMapping("/getFetchAllroomlsu")
	public ResponseEntity<List<RoomNumberAllocationDTO>> getFetchAllRNA(){
		List<RoomNumberAllocationDTO> rlsuDto=roomnumberallocationservice.getFetchAllRNA();
		return new ResponseEntity<>(rlsuDto,HttpStatus.OK);
	}
	@GetMapping("/fetchIdrlsu/{roomId}")
	public ResponseEntity<String > getFetchIdRoomnumber(@PathVariable int roomId){
		
		RoomNumberAllocationDTO dto=roomnumberallocationservice.getFetchIdRoomnumber(roomId);
		return new ResponseEntity<>("fetch successfully",HttpStatus.OK);		
	}
	
}
