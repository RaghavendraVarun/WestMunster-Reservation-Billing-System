package hotel.edu.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import hotel.edu.dto.CheckUserDTO;
import hotel.edu.dto.UserDTO;
import hotel.edu.model.CheckUser;
import hotel.edu.model.User;
import hotel.edu.service.UserService;

@CrossOrigin
@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	@PostMapping("/createUser")
	public ResponseEntity<String> getCreateUser(@RequestBody UserDTO userDto){
		User use=userService.getCreateUser(userDto);
		return  new ResponseEntity<>("create successfully",HttpStatus.CREATED);
	}
	
	@GetMapping("/getFetchAllUser")
	public ResponseEntity<List<UserDTO>> getFetchAllUser(){
		List<UserDTO> userDto=userService.getFetchAllUser();
		return new ResponseEntity<>(userDto,HttpStatus.OK);
	}
	@PutMapping("/updateUser/{userId}")
	public ResponseEntity<String> updateUser(@PathVariable int userId , @RequestBody UserDTO userdto) {
	    UserDTO updatedUser = userService.updateUser(userId, userdto);
	    return new ResponseEntity<>("update successufully", HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteUser/{userId}")
	public ResponseEntity<String> deleteUser(@PathVariable int userId){
		UserDTO user=userService.deleteUser(userId);
		return new ResponseEntity<>("delete successfully",HttpStatus.OK);
	}

	@GetMapping("/fetchIdUser/{userId}")
	public ResponseEntity<String > getFetchIdUser(@PathVariable int userId){
		
		UserDTO dto=userService.getFetchIdUser(userId);
		return new ResponseEntity<>("fetch successfully",HttpStatus.OK);		
	}
	
	@PostMapping("/userLogin")
	public ResponseEntity<Object> userLogin(@RequestBody CheckUserDTO check) {
	    Map<String, Object> response = (Map<String, Object>) userService.userLogin(check);

	    if ("error".equals(response.get("status"))) {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response); 
	    } else {
	        return ResponseEntity.ok(response); 
	    }
	}
	
	
}
