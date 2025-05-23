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

import hotel.edu.dto.RoomTypeDTO;
import hotel.edu.model.RoomType;
import hotel.edu.service.RoomTypeService;

@RestController
public class RoomTypeController {
	 @Autowired
	 private RoomTypeService roomtypeservice;
	
	 @PostMapping("/roomtype")
	    public ResponseEntity<String> createRoomType(@RequestBody RoomTypeDTO roomtypedto) {
	        RoomType roomtype = roomtypeservice.createRoomType(roomtypedto);
	        return new ResponseEntity<>("Room Type created successfully", HttpStatus.CREATED);
	    }
	
	 @GetMapping("/fetchall")
	 public ResponseEntity<List<RoomTypeDTO> >getAllRoomType(){
		List<RoomTypeDTO> roomtype=roomtypeservice.getAllRoomType();
		 return new ResponseEntity<>(roomtype,HttpStatus.OK);
	 }	 
	 @GetMapping("/fetchbyId/{roomtypeId}")
		 public ResponseEntity<RoomTypeDTO> getroomTypebyId(@PathVariable int roomtypeId) {
		     RoomTypeDTO room = roomtypeservice.getroomTypebyId(roomtypeId);
		     return new ResponseEntity<>(room, HttpStatus.OK);
		 }
	
		 
		 
	 }


