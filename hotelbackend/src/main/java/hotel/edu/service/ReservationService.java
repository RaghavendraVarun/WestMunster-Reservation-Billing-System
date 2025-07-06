package hotel.edu.service;

import java.util.List;
import java.util.Map;

import hotel.edu.dto.AvailableRoomRequestDTO;
import hotel.edu.dto.CreateReservationDTO;
import hotel.edu.dto.DatesDTO;
import hotel.edu.dto.ReservationAvailableRoomNumberDTO;
import hotel.edu.dto.ReservationAvailableRoomtypeNumberDTO;
import hotel.edu.dto.ReservationConfirmationDTO;
import hotel.edu.dto.ReservationResponseDTO;
import hotel.edu.dto.UpdateReservationDTO;
import hotel.edu.model.Reservation;

public interface ReservationService {


	public Map<String, Object> createReservation(CreateReservationDTO dto);
	
	public Object updateReservation( UpdateReservationDTO dto);

	List<ReservationResponseDTO> getAllReservations();

	public ReservationResponseDTO getReservationById(Integer id);

	public List<ReservationAvailableRoomNumberDTO> getAvailableRooms(String checkInDate, String checkOutDate);

	public List<ReservationAvailableRoomNumberDTO> getAvailableRoomtype(String checkInDate, String checkOutDate, Integer roomTypeId);

	public List<ReservationAvailableRoomNumberDTO> getFreeRooms(DatesDTO dates);

	public List<ReservationAvailableRoomNumberDTO> getFreeRoomtype(AvailableRoomRequestDTO request);

	public List<ReservationResponseDTO> getAllReservationsbyId(Integer reservationId);

	public List<ReservationResponseDTO> getReservationsByUserId(Integer userId);

//	public List<ReservationAvailableRoomNumberDTO> getFreeRoomtype(AvailableRoomRequestDTO request);










}
