package hotel.edu.service;

import java.util.List;

import hotel.edu.dto.AmenitiesDTO;
import hotel.edu.model.Amenities;

public interface AmenitiesService {

	Amenities createAmenities(AmenitiesDTO amenitiesDto);

	List<AmenitiesDTO> fetchAll();

}