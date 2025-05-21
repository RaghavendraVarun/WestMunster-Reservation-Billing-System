package hotel.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hotel.edu.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer>{

}
