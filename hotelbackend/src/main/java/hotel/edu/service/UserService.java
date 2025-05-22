package hotel.edu.service;

import java.util.List;


import hotel.edu.dto.UserDTO;
import hotel.edu.model.CheckUser;
import hotel.edu.model.User;

public interface UserService {

	User getCreateUser(UserDTO userDto);

	List<UserDTO> getFetchAllUser();

	UserDTO updateUser(int userId, UserDTO userdto);


	UserDTO deleteUser(int userId);

	UserDTO getFetchIdUser(int userId);

	User getCreate(CheckUser check);

	


	

}
