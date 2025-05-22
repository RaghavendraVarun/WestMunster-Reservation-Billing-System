package hotel.edu.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.aspectj.weaver.ast.HasAnnotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	    user.setUserId(userDto.getUserId());
	    user.setCreateBy(userDto.getRole().getRoleId());
	    user.setUpdateBy(userDto.getRole().getRoleId());
	    
	   
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
		    
		    if (user == null) {
		        throw new RuntimeException("User not found with ID: " + userId);
		    }

		    user.setUserName(userdto.getUserName());
		    user.setEmail(userdto.getEmail());
		    user.setDob(userdto.getDob());
		    user.setPassword(userdto.getPassword());
		    user.setCity(userdto.getCity());
		    user.setContactNumber(userdto.getContactNumber());
		    user.setPinCode(userdto.getPinCode());
		    user.setPermanentAddress(userdto.getPermanentAddress());
		    user.setTemporaryAddress(userdto.getTemporaryAddress());
		

		    userRepository.save(user);
		    return userdto;
	}


	@Override
	public UserDTO deleteUser(int userId) {
		// TODO Auto-generated method stub
		User user=userRepository.findById(userId).orElse(null);
		
		if (user == null) {
	        throw new RuntimeException("User not found with ID: " + userId);
	    }

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
		dto.setCity(user.getCity());
		dto.setContactNumber(user.getContactNumber());
		dto.setDob(user.getDob());
		dto.setEmail(user.getEmail());
		dto.setUserId(user.getUserId());
		dto.setUserName(user.getUserName());
		dto.setPermanentAddress(user.getPermanentAddress());
		dto.setTemporaryAddress(user.getTemporaryAddress());
		
		return dto;
	}

	@Override
	public User getCreate(CheckUser check) {
		// TODO Auto-generated method stub
		User user=userRepository.findByEmailAndPassword(check.getEmail(),check.getPassword());
		return user;
	}

	


		
	}

