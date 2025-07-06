package hotel.edu.repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hotel.edu.model.Reservation;
import hotel.edu.model.RoomNumberAllocation;
import hotel.edu.model.User;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
	@Query("SELECT r FROM Reservation r WHERE r.checkInDate < :checkOut AND r.checkOutDate > :checkIn")
	List<Reservation> findOverlappingReservations(@Param("checkIn") LocalDateTime checkIn, @Param("checkOut") LocalDateTime checkOut);

	 @Query("""
		        SELECT r FROM RoomNumberAllocation r
		        WHERE r.roomLocationSetUp.roomType.id = :roomTypeId
		          AND r.id NOT IN (
		              SELECT rra.roomNumberAllocation.roomId FROM ReservationRoomAllocation rra
		              WHERE rra.reservation.checkInDate < :checkOutDate
		                AND rra.reservation.checkOutDate > :checkInDate
		          )
		    """)
		    List<RoomNumberAllocation> findAvailableRooms(
		            @Param("checkInDate") LocalDateTime checkInDate,
		            @Param("checkOutDate") LocalDateTime checkOutDate,
		            @Param("roomTypeId") Integer roomTypeId);
	 
	 
	 @Query("SELECT r FROM Reservation r WHERE r.user.id = :userId")
		List<Reservation> findReservationsByUserId(@Param("userId") Integer userId);

	List<Reservation> findByReservedBy(Integer userId);

	 
//	 @Query("SELECT r.room FROM Reservation r " +
//		       "WHERE r.checkInDate < :checkOutDate AND r.checkOutDate > :checkInDate")
//		List<RoomNumberAllocation> findReservedRoomsBetween(
//		    @Param("checkInDate") LocalDate checkInDate,
//		    @Param("checkOutDate") LocalDate checkOutDate
//		);
//	 @Query("SELECT r FROM Reservation r WHERE r.checkInDate < :checkOut AND r.checkOutDate > :checkIn")
//	 List<Reservation> findOverlappingReservations(@Param("checkIn") LocalDateTime checkIn,
//	                                                @Param("checkOut") LocalDateTime checkOut);


//	List<RoomNumberAllocation> findReservedRoomsBetween(String checkInDate, String checkOutDate);
		}

