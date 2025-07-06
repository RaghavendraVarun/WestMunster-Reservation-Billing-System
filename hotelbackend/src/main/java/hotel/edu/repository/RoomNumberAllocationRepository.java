package hotel.edu.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hotel.edu.model.Reservation;
import hotel.edu.model.ReservationRoomAllocation;
import hotel.edu.model.RoomNumberAllocation;
import hotel.edu.model.Season;
import hotel.edu.model.User;

@Repository
public interface RoomNumberAllocationRepository extends JpaRepository<RoomNumberAllocation, Integer>{

	
	@Query(value="SELECT * from reservation where DATE_FORMAT(check_in_date, '%Y-%m-%d') = :startDate"
			+ "AND DATE_FORMAT(check_out_date, '%Y-%m-%d') = :endDate", nativeQuery = true)
	List<Reservation> findCheckRoomAvailabilities(LocalDate startDate, LocalDate endDate);

	@Query("SELECT r FROM RoomNumberAllocation r WHERE r.roomLocationSetUp.locationId = :locationId ORDER BY r.roomNumber DESC")
	List<RoomNumberAllocation> findRoomAllocationDeleteRecords(@Param("locationId") Integer locationId, Pageable pageable);


	List<RoomNumberAllocation> findByRoomLocationSetUpRoomTypeRoomTypeId(Integer roomTypeId);

	

	List<RoomNumberAllocation> findByRoomLocationSetUpFloorNumberAndRoomLocationSetUpRoomTypeRoomTypeId(
			Integer floorNumber, Integer roomTypeId);
//
//	List<RoomNumberAllocation> findByRoomLocationSetUpFloorNumberAndRoomLocationSetUpRoomTypeRoomTypeId(
//			Integer floorNumber, Integer roomTypeId);


}