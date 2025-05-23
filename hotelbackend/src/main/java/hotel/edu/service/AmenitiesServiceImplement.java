package hotel.edu.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import hotel.edu.controller.AmenitiesController;
import hotel.edu.dto.AmenitiesDTO;
import hotel.edu.model.Amenities;
import hotel.edu.model.Role;
import hotel.edu.model.RoomType;
import hotel.edu.model.User;
import hotel.edu.repository.AmenitiesRepository;
import hotel.edu.repository.RoomTypeReposiotry;
import hotel.edu.repository.UserRepository;

@Service
public class AmenitiesServiceImplement implements AmenitiesService{

  
	
	@Autowired
	private AmenitiesRepository amenitiesRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoomTypeReposiotry roomTypeReposiotry;



	
	

	@Override
	public Amenities createAmenities(AmenitiesDTO amenitiesDto) {
		// TODO Auto-generated method stub
			
		Amenities amenites=new Amenities();
		amenites.setAmenityId(amenitiesDto.getAmenityId());
		amenites.setAmenitiesType(amenitiesDto.getAmenitiesType());
		amenites.setCreatedBy(amenitiesDto.getCreatedBy());
		
		 List<RoomType> roomTypes = roomTypeReposiotry.findById(amenitiesDto.getRoomType());
		 amenites.setRoomType(roomTypes);
		
		int userId=amenitiesDto.getUser().getUserId();
		User user=userRepository.findById(userId).orElse(null);
		amenites.setCreatedBy(userId);
		amenites.setUser(user);

		return amenitiesRepository.save(amenites);
	}



	@Override
	public List<AmenitiesDTO> fetchAll() {
		
		List<AmenitiesDTO> ameDto=new ArrayList<>();
		
		  List<Amenities> amenities=amenitiesRepository.findAll();
		  for(Amenities ame:amenities) {
			  AmenitiesDTO dto=new AmenitiesDTO();
			  dto.setAmenitiesType(ame.getAmenitiesType());
			  dto.setCreatedBy(ame.getCreatedBy());
			  dto.setCreatedBy(ame.getUser().getUserId());
			  dto.setRoomType(ame.getRoomType());
			  ameDto.add(dto);
		
	}
		  return ameDto;
	
	}
}
