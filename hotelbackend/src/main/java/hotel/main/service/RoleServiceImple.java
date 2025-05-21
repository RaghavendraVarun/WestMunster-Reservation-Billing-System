package hotel.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hotel.main.model.Role;
import hotel.main.repository.RoleRepository;

@Service
public class RoleServiceImple implements RoleService {
	
	@Autowired
	private RoleRepository roleRepository;

	@Override
	public Role getCreate(Role role) {
		// TODO Auto-generated method stub
		Role role1=roleRepository.save(role);
		return role1;
	}

}
