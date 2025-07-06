package hotel.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hotel.edu.model.RoomLocationSetUp;
import hotel.edu.model.RoomType;

@Repository
public interface RoomLocationSetUpRepository  extends JpaRepository<RoomLocationSetUp, Integer>{



	@Query("SELECT COUNT(r) FROM RoomNumberAllocation r WHERE r.roomLocationSetUp.locationId = :locationId")
	Integer getRoomAllocationCount(@Param("locationId") int locationId);
	
	@Query("SELECT SUM(r.count) FROM RoomLocationSetUp r WHERE r.roomType.id = :roomTypeId")
	Integer getTotalCountByRoomTypeId(@Param("roomTypeId") Integer roomTypeId);
}
