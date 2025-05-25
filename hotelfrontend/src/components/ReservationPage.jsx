import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { HotelService } from './HotelService/HotelService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ReservationPage = () => {
  const navigate = useNavigate();
  const [reservation, setReservation] = useState({
    bookingStatus: '',
    checkInDate: '',
    checkOutDate: '',
    noOfGuests: '',
    noOfRooms: '',
  });

  const [errMsgs, setErrMsgs] = useState({
    bookingStatus: '',
    checkInDate: '',
    checkOutDate: '',
    noOfGuests: '',
    noOfRooms: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => ({ ...prev, [name]: value }));

    const updatedErrors = { ...errMsgs };

    if (name === "bookingStatus") {
      updatedErrors.bookingStatus = value === "" ? "Booking status is required" :
        value.length > 15 ? "Booking status must be under 15 characters" : "";
    }

    if (name === "checkInDate") {
      updatedErrors.checkInDate = value === "" ? "Check-in date is required" : "";
    }

    if (name === "checkOutDate") {
      updatedErrors.checkOutDate = value === "" ? "Check-out date is required" : "";
    }

    if (name === "noOfGuests") {
      updatedErrors.noOfGuests = value === "" ? "Number of guests is required" :"";
      
    }

    if (name === "noOfRooms") {
      updatedErrors.noOfRooms = value === "" ? "Number of rooms is required" :"";
    }  

    setErrMsgs(updatedErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate again before submission
    if (
      Object.values(errMsgs).some(msg => msg !== '') ||
      Object.values(reservation).some(val => val === '')
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fix validation errors before submitting.',
      });
      return;
    }

    try {
      const response = await HotelService.createReservation(reservation);
      console.log(response);
      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Reservation Created!',
          text: 'Your reservation was successfully created.',
        });
        navigate("/login");
      }
    } catch (err) {
      console.error("Error saving reservation", err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong while creating reservation.',
      });
    }
  };

  return (
    <div className="login">
      <img src="/images/Bellagio-Hotel-Casino-Las-Vegas.webp" alt="Hotel Frame" className="img-fluid w-100 shadow-sm" />
      <div className="position-absolute text-white translate-middle top-50 start-50">
        <div className='reservation-box'>
          <h1>Reservation</h1>
          <Form className="form2" onSubmit={handleSubmit}>
            <Form.Group>
              <Row className="mt-6">
                <Col md={6}>
                  <Form.Label className="mt-6">Status:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the status"  name="bookingStatus"  onChange={handleChange}  value={reservation.bookingStatus}
                  />
                  {errMsgs.bookingStatus && <div className="text-danger">{errMsgs.bookingStatus}</div>}
                </Col>
              </Row>
              <Row className="mt-6">
                <Col md={6}>
                  <Form.Label>Check-in:</Form.Label>
                  <Form.Control
                    type="date"  name="checkInDate"  onChange={handleChange}  value={reservation.checkInDate}
                  />
                  {errMsgs.checkInDate && <div className="text-danger">{errMsgs.checkInDate}</div>}
                </Col>
                <Col md={6}>
                  <Form.Label className="mt-6">Check-out:</Form.Label>
                  <Form.Control
                    type="date"  name="checkOutDate"  onChange={handleChange}  value={reservation.checkOutDate}
                  />
                  {errMsgs.checkOutDate && <div className="text-danger">{errMsgs.checkOutDate}</div>}
                </Col>
              </Row>
              <Row className="mt-6">
                <Col md={6}>
                  <Form.Label>No of Guests:</Form.Label>
                  <Form.Control
                    type="number"  name="noOfGuests"  onChange={handleChange}  value={reservation.noOfGuests}
                  />
                  {errMsgs.noOfGuests && <div className="text-danger">{errMsgs.noOfGuests}</div>}
                </Col>
                <Col md={6}>
                  <Form.Label>No of Rooms:</Form.Label>
                  <Form.Control
                    type="number"  name="noOfRooms"  onChange={handleChange}  value={reservation.noOfRooms}
                  />
                  {errMsgs.noOfRooms && <div className="text-danger">{errMsgs.noOfRooms}</div>}
                </Col>
              </Row>
            </Form.Group>
            <button type="submit" style={{ margin: "10px 100px" }}>Submit</button>
          </Form>
        </div>
      </div>
    </div>
  );
};