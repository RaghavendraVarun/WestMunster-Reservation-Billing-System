package hotel.edu.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.aspectj.weaver.ast.HasAnnotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import hotel.edu.dto.CheckUserDTO;
import hotel.edu.dto.UserDTO;
import hotel.edu.model.CheckUser;
import hotel.edu.model.Role;
import hotel.edu.model.User;
import hotel.edu.repository.RoleRepository;
import hotel.edu.repository.UserRepository;

@Service
public class UserServiceImplement implements UserService{
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;

	@Override
	public User getCreateUser(UserDTO userDto) {
		
	
		Role role = roleRepository.findById(userDto.getRole().getRoleId()).orElse(null);
		            
	    User user = new User();
	    user.setCity(userDto.getCity());
	    user.setContactNumber(userDto.getContactNumber());
	    user.setDob(userDto.getDob());
	    user.setEmail(userDto.getEmail());
	    user.setPassword(userDto.getPassword());
	    user.setPermanentAddress(userDto.getPermanentAddress());
	    user.setPinCode(userDto.getPinCode());
	    user.setTemporaryAddress(userDto.getTemporaryAddress());
	    user.setUserName(userDto.getUserName());
	    user.setUserId(userDto.getUserId());
	    user.setCreateBy(userDto.getRole().getRoleId());
	    user.setUpdateBy(userDto.getRole().getRoleId());
	    user.setRole(userDto.getRole());
	      return  userRepository.save(user);
	    
	}

	@Override
	public List<UserDTO> getFetchAllUser() {
		
		   List<UserDTO> dto = new ArrayList<>();
		    List<User> users = userRepository.findAll();

		    for (User user : users) {
		        UserDTO userDto = new UserDTO();
		        userDto.setUserId(user.getUserId());
		        userDto.setUserName(user.getUserName());
		        userDto.setEmail(user.getEmail());
		        userDto.setPassword(user.getPassword());
		        userDto.setContactNumber(user.getContactNumber());
		        userDto.setDob(user.getDob());
		        userDto.setPermanentAddress(user.getPermanentAddress()); 
		        userDto.setTemporaryAddress(user.getTemporaryAddress());
		        userDto.setCity(user.getCity());
		        userDto.setPinCode(user.getPinCode());
		        
		        dto.add(userDto);
		    }

		    return dto;
		}

	@Override
	public UserDTO updateUser(int userId, UserDTO userdto) {
		
		 User user = userRepository.findById(userId).orElse(null);
		    
		  
		 	user.setUserId(userdto.getUserId());
	        user.setUserName(userdto.getUserName());
		    user.setEmail(userdto.getEmail());
		    user.setDob(userdto.getDob());
		    user.setPassword(userdto.getPassword());
		    user.setCity(userdto.getCity());
		    user.setContactNumber(userdto.getContactNumber());
		    user.setPinCode(userdto.getPinCode());
		    user.setPermanentAddress(userdto.getPermanentAddress());
		    user.setTemporaryAddress(userdto.getTemporaryAddress());
		    user.setUpdateBy(userdto.getRole().getRoleId());
		   
		

		    userRepository.save(user);
		    return userdto;
	}


	@Override
	public UserDTO deleteUser(int userId) {
		// TODO Auto-generated method stub
		User user=userRepository.findById(userId).orElse(null);
		
	    userRepository.delete(user);
		
			UserDTO userdto=new UserDTO();
			userdto.setUserId(userId);
			
		return userdto;
		
	}

	@Override
	public UserDTO getFetchIdUser(int userId) {
		UserDTO dto=new UserDTO();
		User user=userRepository.findById(userId).orElse(null);
		dto.setRole(user.getRole());
		dto.setUpdateBy(user.getUpdateBy());
		dto.setCreateBy(user.getCreateBy());
		dto.setCity(user.getCity());
		dto.setContactNumber(user.getContactNumber());
		dto.setDob(user.getDob());
		dto.setEmail(user.getEmail());
		dto.setUserId(user.getUserId());
		dto.setUserName(user.getUserName());
		dto.setPermanentAddress(user.getPermanentAddress());
		dto.setTemporaryAddress(user.getTemporaryAddress());
		dto.setUserId(user.getUserId());
		
		return dto;
	}
	
    	
	  
	@Override
	public Object userLogin(CheckUserDTO check) {
	    String email = check.getEmail();
	    String password = check.getPassword();
	    Map<String, Object> map = new HashMap<>();
	    User userTable = userRepository.getUserLoginDetail(email);
	    
	    if(userTable == null) {
	    	map.put("status", "error");
	        map.put("message", "Invalid email");
	        return map;
	    }

	    if (password.equals(userTable.getPassword())) {
	        map.put("status", "success");
	        map.put("message", "Login successfully");

	    } else {
	        map.put("status", "error");
	        map.put("message", "Invalid password");
	    }
        return map;

	}
	
	}

