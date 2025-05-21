package hotel.edu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import hotel.edu.dto.UserDTO;
import hotel.edu.model.User;
import hotel.edu.service.UserService;

@Controller
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	@PostMapping("/createUser")
	public ResponseEntity<User> getCreateUser(@RequestBody UserDTO userDto){
		
		User use=userService.getCreateUser(userDto);
		
		return new ResponseEntity<>(use,HttpStatus.CREATED);
		
		
	}
	
	@GetMapping("/getFetchAllUser")
	public ResponseEntity<List<UserDTO>> getFetchAllUser(){
		
		List<UserDTO> userDto=userService.getFetchAllUser();
		return new ResponseEntity<>(userDto,HttpStatus.OK);
	}

}
