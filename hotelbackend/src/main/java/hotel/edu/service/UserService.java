package hotel.edu.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import hotel.edu.dto.CheckUser;
import hotel.edu.dto.UserDTO;
import hotel.edu.dto.UserLoginDTO;
import hotel.edu.model.User;

public interface UserService {

	Object getCreateUser(UserDTO userDto);

	List<UserDTO> getFetchAllUser();

	UserDTO updateUser(int userId, UserDTO userdto);


	UserDTO deleteUser(int userId);

	UserDTO getFetchIdUser(int userId);

	Object userLogin(UserLoginDTO check);


	


	

}
