package hotel.edu.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hotel.edu.model.Reservation;
import hotel.edu.model.ReservationRoomAllocation;
import hotel.edu.model.RoomNumberAllocation;
import hotel.edu.model.User;
@Repository
public interface ReservationRoomAllocationRepository extends JpaRepository<ReservationRoomAllocation, Integer>{

	List<ReservationRoomAllocation> findByReservation(Reservation reservation);


}
