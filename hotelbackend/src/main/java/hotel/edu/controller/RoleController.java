package hotel.edu.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import hotel.edu.model.Role;
import hotel.edu.service.RoleService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Controller
public class RoleController {
	
	@Autowired
	private RoleService roleService;
	
	
	@PostMapping("/create")
	public ResponseEntity<Role> getCreate(@RequestBody Role role){
		
		Role role1=roleService.getCreate(role);
		 
		return new ResponseEntity<>(role1,HttpStatus.CREATED);
		
	}
	


	

}
