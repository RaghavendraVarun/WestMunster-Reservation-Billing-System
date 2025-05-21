package hotel.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import hotel.edu.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
