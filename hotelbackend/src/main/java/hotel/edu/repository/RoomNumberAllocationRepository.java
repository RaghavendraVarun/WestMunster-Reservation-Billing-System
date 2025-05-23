package hotel.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import hotel.edu.model.RoomNumberAllocation;


public interface RoomNumberAllocationRepository extends JpaRepository<RoomNumberAllocation, Integer>{

}
