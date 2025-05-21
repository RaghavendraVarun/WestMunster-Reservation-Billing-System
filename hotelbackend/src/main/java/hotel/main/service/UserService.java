package hotel.main.service;

import java.util.List;

import hotel.main.DTO.UserDTO;
import hotel.main.model.User;

public interface UserService {

	User getCreateUser(UserDTO userDto);

	List<UserDTO> getFetchAllUser();

}
