package hotel.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hotel.edu.model.Amenities;

@Repository
public interface AmenitiesRepository extends JpaRepository<Amenities, Integer>{

}
