package hotel.edu.service;

import java.util.List;

import hotel.edu.dto.ReservationDTO;

import hotel.edu.model.Reservation;

public interface ReservationService {
    Reservation createReservation(ReservationDTO reservationDTO);

	ReservationDTO getFetchIdReservation(int reservationId);

	List<ReservationDTO> getFetchAllReservations();

}