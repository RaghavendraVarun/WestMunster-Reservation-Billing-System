package hotel.edu.service;

import hotel.edu.dto.ReservationDTO;

import hotel.edu.model.Reservation;

public interface ReservationService {
    Reservation createReservation(ReservationDTO reservationDTO);

}