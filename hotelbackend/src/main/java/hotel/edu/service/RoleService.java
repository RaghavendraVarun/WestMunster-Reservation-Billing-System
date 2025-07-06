package hotel.edu.service;


import java.util.List;

import hotel.edu.model.Role;

public interface RoleService {

	Object getCreate (String roleName);

	List<Role> getFetchAll();

	Role getFetchId(int roleId);

	Role getUpdate(Role role, int roleId);

	String getDelete(int roleId);

}
