package hotel.edu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hotel.edu.model.RoomType;

@Repository
public interface RoomTypeReposiotry extends JpaRepository<RoomType, Integer>{

	@Query("select count(r) from RoomType r where roomTypeName = :roomTypeName")
	Integer getRoomTypeName(String roomTypeName);

	List<RoomType> findByRoomTypeName(String roomTypeName);

}
	