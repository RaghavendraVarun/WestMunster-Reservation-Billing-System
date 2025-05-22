package hotel.edu.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hotel.edu.dto.UserDTO;
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
	    user.setUserId(userDto.getUserId());
	    user.setUserFirstName(userDto.getUserFirstName());
	    user.setUserLastName(userDto.getUserLastName());
	    user.setUserEmail(userDto.getUserEmail());
	    user.setUserPassword(userDto.getUserPassword());
	    user.setUserContactNumber(userDto.getUserContactNumber());
	    user.setUserPermanentAddress(userDto.getUserPermanentAddress()); 
	    user.setUserTemporaryAddress(userDto.getUserTemporaryAddress());
	    user.setUserCity(userDto.getUserCity());
	    user.setUserPinCode(userDto.getUserPinCode());
	    user.setUserDob(userDto.getUserDob());
	
	    user.setRole(role);

	    return userRepository.save(user);
	}

	@Override
	public List<UserDTO> getFetchAllUser() {
		
		   List<UserDTO> dto = new ArrayList<>();
		    List<User> users = userRepository.findAll();

		    for (User user : users) {
		        UserDTO userDto = new UserDTO();
		        userDto.setUserId(user.getUserId());
		        userDto.setUserFirstName(user.getUserFirstName());
		        userDto.setUserLastName(user.getUserLastName()); 
		        userDto.setUserEmail(user.getUserEmail());
		        userDto.setUserPassword(user.getUserPassword());
		        userDto.setUserContactNumber(user.getUserContactNumber());
		        userDto.setUserDob(user.getUserDob());
		        userDto.setUserPermanentAddress(user.getUserPermanentAddress()); 
		        userDto.setUserTemporaryAddress(user.getUserTemporaryAddress());
		        userDto.setUserCity(user.getUserCity());
		        userDto.setUserPinCode(user.getUserPinCode());
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

		    user.setUserFirstName(userdto.getUserFirstName());
		    user.setUserLastName(userdto.getUserLastName());
		    user.setUserEmail(userdto.getUserEmail());
		    user.setUserDob(userdto.getUserDob());
		    user.setUserPassword(userdto.getUserPassword());
		    user.setUserCity(userdto.getUserCity());
		    user.setUserContactNumber(userdto.getUserContactNumber());
		    user.setUserPinCode(userdto.getUserPinCode());
		    user.setUserPermanentAddress(userdto.getUserPermanentAddress());
		    user.setUserTemporaryAddress(userdto.getUserTemporaryAddress());
		

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
		User user=userRepository.findById(userId).orElseThrow(() ->new RuntimeException("not found"));
		dto.setRole(user.getRole());
		dto.setUserCity(user.getUserCity());
		dto.setUserContactNumber(user.getUserContactNumber());
		dto.setUserDob(user.getUserDob());
		dto.setUserEmail(user.getUserEmail());
		dto.setUserId(user.getUserId());
		dto.setUserFirstName(user.getUserFirstName());
		dto.setUserLastName(user.getUserLastName());
		dto.setUserPermanentAddress(user.getUserPermanentAddress());
		dto.setUserTemporaryAddress(user.getUserTemporaryAddress());
		
		return dto;
	}


		
	}

