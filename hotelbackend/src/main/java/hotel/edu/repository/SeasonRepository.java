package hotel.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hotel.edu.model.Season;

@Repository
public interface SeasonRepository extends JpaRepository<Season, Integer>{

	@Query("select count(s) from Season s where s.seasonName=:seasonName")
	Integer findSeasonName(@Param("seasonName") String seasonName);

}
