package hotel.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import hotel.main.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
