package hotel.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hotel.edu.model.RoomLocationSetUp;
import hotel.edu.model.RoomType;

@Repository
public interface RoomLocationSetUpRepository  extends JpaRepository<RoomLocationSetUp, Integer>{

}
