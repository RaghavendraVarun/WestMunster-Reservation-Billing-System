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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PutExchange;

import hotel.edu.dto.RoomTypeDTO;
import hotel.edu.dto.RoomTypeDatePriceDTO;
import hotel.edu.dto.RoomtypenameDTO;
import hotel.edu.dto.UpdateRoomTypeDTO;
import hotel.edu.model.RoomType;
import hotel.edu.service.RoomTypeService;
@CrossOrigin
@RestController
public class RoomTypeController {
	 @Autowired
	 private RoomTypeService roomtypeservice;
	
	 @PostMapping("/createRoomType")
	    public Object createRoomType(@RequestBody RoomTypeDTO roomtypedto) {
	        return roomtypeservice.createRoomType(roomtypedto);
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
	 @PutMapping("/roomTypeUpdate/{roomTypeId}")
	 public Object roomTypeUpdate(@PathVariable int roomTypeId, @RequestBody UpdateRoomTypeDTO updateDTO){
		 
		 return roomtypeservice.roomTypeUpdate(roomTypeId,updateDTO);
		 
	 }
	 
	 @GetMapping("/roomTypeDropDown")
	 public Object roomTypeDropDown() {
	         return roomtypeservice.roomTypeDropDown();
	 }
	 
	 @GetMapping("/fetchallroomtype/{roomTypeName}")
	 public ResponseEntity<List<RoomtypenameDTO>> getFetchAllRoomType(@PathVariable String roomTypeName) {
	     List<RoomtypenameDTO> roomtypes = roomtypeservice.getFetchAllRoomType(roomTypeName);
	     return new ResponseEntity<>(roomtypes, HttpStatus.OK);
	 }
	 
	 @GetMapping("/fetchallprice/{roomTypeName}")
	 public ResponseEntity<List<RoomTypeDatePriceDTO>> getFetchAllPrice(@PathVariable String roomTypeName) {
	     List<RoomTypeDatePriceDTO> prices = roomtypeservice.getFetchAllPrice(roomTypeName);
	     return new ResponseEntity<>(prices, HttpStatus.OK);
	 }

	 
	 }