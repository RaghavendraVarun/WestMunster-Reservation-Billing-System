package hotel.edu.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hotel.edu.dto.ReservationDTO;
import hotel.edu.model.Reservation;
import hotel.edu.repository.ReservationRepository;

@Service
public class ReservationServiceImplement implements ReservationService{
@Autowired
     private ReservationRepository reservationrepository;

@Override
public Reservation createReservation(ReservationDTO reservationDTO) {
	// TODO Auto-generated method stub
	
	Reservation reservation=new Reservation();
	reservation.setReservationId(reservationDTO.getReservationId());
	reservation.setBookingStatus(reservationDTO.getBookingStatus());
	reservation.setCheckInDate(reservationDTO.getCheckInDate());
	reservation.setCheckOutDate(reservationDTO.getCheckOutDate());
	reservation.setNoOfGuests(reservationDTO.getNoOfGuests());
	reservation.setNoOfRooms(reservationDTO.getNoOfRooms());
	reservation.setTotalCost(reservationDTO.getTotalCost());
	reservation.setReservedBy(reservationDTO.getReservedBy());
	reservation.setUpdatedBy(reservationDTO.getUpdatedBy());
	reservation.setReservedDate(reservationDTO.getReservedDate());
	reservation.setUpdateDate(reservationDTO.getUpdateDate());

	return reservationrepository.save(reservation);
	}


}













