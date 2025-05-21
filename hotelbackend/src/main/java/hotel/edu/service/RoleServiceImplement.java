package hotel.edu.service;


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

}
