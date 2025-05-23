package hotel.edu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import hotel.edu.dto.AmenitiesDTO;
import hotel.edu.model.Amenities;
import hotel.edu.service.AmenitiesService;

@RestController
public class AmenitiesController {
	
	@Autowired
	private AmenitiesService amenitiedService;
	
	@PostMapping("/createAmenities")
	public ResponseEntity<String> creatAmenities(@RequestBody AmenitiesDTO amenitiesDto) {
		
		Amenities amenities=amenitiedService.createAmenities(amenitiesDto);
		return new ResponseEntity<>("create Successfuly",HttpStatus.CREATED);
		
	}
	
	@GetMapping("/fetchAll")
	public ResponseEntity<String>  fetchAll(){
		
		List<AmenitiesDTO> amenties=amenitiedService.fetchAll();
		return new ResponseEntity<>("fetchAll successfully",HttpStatus.OK);
	}

}
