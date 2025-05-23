package hotel.edu.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import hotel.edu.model.Role;
import hotel.edu.service.RoleService;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@RestController
public class RoleController {
	
	@Autowired
	private RoleService roleService;
	
	
	@PostMapping("/createRole")
	public String getCreate(@RequestBody Role role){
		
		Role role1=roleService.getCreate(role);
		 
		return "create Succussful";
		
	}
	
 @GetMapping("/fetchAllRole")
 public ResponseEntity<List<Role>> getFetchAll(){
	 List<Role> role=(List<Role>) roleService.getFetchAll();
	 return new ResponseEntity<>(role,HttpStatus.OK);
	 
 }
@GetMapping("/fetchIdRole/{roleId}")
public  ResponseEntity<Role> getFetchId(@PathVariable int roleId){
	Role role=roleService.getFetchId(roleId);
	 return new ResponseEntity<>(role,HttpStatus.OK);
}
   @PutMapping("/updateRole/{roleId}")
   public ResponseEntity<Role> getUpdate(@RequestBody Role role,int roleId){
	   
	   Role role1=roleService.getUpdate(role,roleId);
		 return new ResponseEntity<>(role1,HttpStatus.OK);

	   
   }
   
 @DeleteMapping("/deleteRole/{roleId}")
 public String getDelete(@PathVariable int roleId) {
	 String role=roleService.getDelete(roleId);
	 return "deleted";

 }
}
