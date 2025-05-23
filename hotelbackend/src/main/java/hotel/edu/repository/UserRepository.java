package hotel.edu.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import hotel.edu.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("select u from User u where u.email = :email")
	User getUserLoginDetail(@Param("email") String email);

		
	

}
