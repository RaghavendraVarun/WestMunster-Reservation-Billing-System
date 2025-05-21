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
		
		User user= new User();
		Role role=roleRepository.findById(userDto.getRole().getRoleId()).orElse(null);
		
		
		user.setAddress1(userDto.getAddress1());
		user.setAddress2(userDto.getAddress2());
		user.setCity(userDto.getCity());
		user.setContactNumber(userDto.getContactNumber());
		user.setCreateAt(userDto.getCreateAt());
		user.setEmail(userDto.getEmail());
		user.setFirstName(userDto.getFirstName());
		user.setId(userDto.getId());
		user.setLastName(userDto.getLastName());
		user.setPassword(userDto.getPassword());
		user.setPinCode(userDto.getPinCode());
		user.setUpdateAt(userDto.getUpdateAt());
		user.setRole(role);
		
		return userRepository.save(user) ;
	}

	@Override
	public List<UserDTO> getFetchAllUser() {
		
		List<UserDTO> dto=new ArrayList<>();
		
		List<User> user=userRepository.findAll();
		for(User use:user) {
			UserDTO userDto=new UserDTO();
			userDto.setAddress1(use.getAddress1());
			userDto.setAddress2(use.getAddress2());
			userDto.setCity(use.getCity());
			userDto.setContactNumber(use.getContactNumber());
			userDto.setCreateAt(use.getCreateAt());
			userDto.setDob(use.getDob());
			userDto.setEmail(use.getEmail());
			userDto.setFirstName(use.getFirstName());
			userDto.setId(use.getId());
			userDto.setLastName(use.getLastName());
			userDto.setPassword(use.getPassword());
			userDto.setPinCode(use.getPinCode());
			userDto.setUpdateAt(use.getUpdateAt());
			dto.add(userDto);
		}
		return dto;
	
	}

	
}
