package hotel.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hotel.edu.model.Season;

@Repository
public interface SeasonRepository extends JpaRepository<Season, Integer>{

}
