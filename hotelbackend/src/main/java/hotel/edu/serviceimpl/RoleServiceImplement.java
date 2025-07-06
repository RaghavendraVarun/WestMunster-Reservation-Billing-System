package hotel.edu.serviceimpl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hotel.edu.model.Role;
import hotel.edu.repository.RoleRepository;
import hotel.edu.service.RoleService;

@Service
public class RoleServiceImplement implements RoleService {
	
	@Autowired
	private RoleRepository roleRepository;

	@Override
	public Object getCreate(String roleName) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		if(roleName !=null && !roleName.isEmpty()) {
			
		Role role = new Role();
		role.setRoleName(roleName);
		
		roleRepository.save(role);
		map.put("status", "success");
		map.put("message", "Role Created Successfully");

		}
		return map;
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
