package hotel.edu.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hotel.edu.model.Role;
import hotel.edu.repository.RoleRepository;

@Service
public class RoleServiceImplement implements RoleService {
	
	@Autowired
	private RoleRepository roleRepository;

	@Override
	public Role getCreate(Role role) {
		Role role1=roleRepository.save(role);
		return role1;
	}

	@Override
	public List<Role> getFetchAll() {
		List<Role> role=roleRepository.findAll();
		return role;
	}

	@Override
	public Role getFetchId(int roleId) {
		Role role=roleRepository.findById(roleId).orElse(null);
		return null;
	}

	@Override
	public Role getUpdate(Role role, int roleId) {
		// TODO Auto-generated method stub
		Role role1=roleRepository.findById(roleId).orElse(null);
		role.setRoleId(role1.getRoleId());
		role.setRoleName(role1.getRoleName());
		return role;
	}

	@Override
	public String getDelete(int roleId) {
		// TODO Auto-generated method stub
		  roleRepository.deleteById(roleId);
		return "deleted";
	}
	

}
