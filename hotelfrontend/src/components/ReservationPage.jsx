/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import { HotelService } from './HotelService/HotelService';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ReservationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const selectedDates = location.state?.selectedDates || [];
  const selectedDates=JSON.parse(localStorage.getItem('selectedDates'));
  const selectedRooms = JSON.parse(localStorage.getItem('selectedRooms'));


  // const manualStartDate = localStorage.getItem("checkInDate");
  // const manualEndDate = localStorage.getItem("checkOutDate");
const totalCost = parseFloat(localStorage.getItem("totalCost")); // Use parseFloat for decimals
  const userId = localStorage.getItem("userId");
const customerId = parseInt(localStorage.getItem("customerId"), 10); // Use parseInt for integers
  const [reservation, setReservation] = useState({
    bookingStatus: '',
    totalCost: totalCost,
    checkInDate: '',
    checkOutDate: '',
    noOfGuests: 0,
    noOfRooms: selectedRooms.length || 0,
    reservedBy: customerId,
    roomIds: selectedRooms,
    // reservationId: ''
  });

  const [errMsgs, setErrMsgs] = useState({
    bookingStatus: '',
    totalCost: '',
    checkInDate: '',
    checkOutDate: '',
    noOfGuests: '',
    noOfRooms: '',
    reservedBy: '',
    roomIds: '',
    // reservationId: ''
  });

  // useEffect(() => {
  //   if (selectedDates.length === 2) {
  //     setReservation(prev => ({
  //       ...prev,
  //       checkInDate: selectedDates[0],
  //       checkOutDate: selectedDates[1],
  //     }));
  //   }
  //   // console.log("reservations:",reservation)
  // }, [selectedDates]);

    console.log("this is reservation",reservation)


  const handleChange = (e) => {
    const { name, value } = e.target;
setReservation(prev => ({
        ...prev,
        checkInDate: selectedDates[0],
        checkOutDate: selectedDates[1],
      }));
    setReservation(prev => ({
      ...prev,
      [name]: ['noOfGuests', 'noOfRooms', 'reservedBy'].includes(name)
        ? (value === '' ? '' : parseInt(value, 10))
        : value,
    }));

    setErrMsgs(prev => ({
      ...prev,
      [name]: value === '' ? `This field is required.` : '',
    }));
  };

  const [users, setUsers] = useState([]);

  useEffect(() => { fetchAllUsersDetails() }, []);

  const fetchAllUsersDetails = async () => {
    try {
      const response = await HotelService.fetchallUsers();
      setUsers(response.data);
    } catch (err) {
      console.log("data is not fetched");
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formatDate = (date) => {
      if (isNaN(d)) {
    return null; // or throw new Error("Invalid date");
  }
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}-${month}-${year}`;
    };

    const newErrors = {};

    // Validation
    if (!reservation.bookingStatus) newErrors.bookingStatus = 'This field is required.';
    if (!reservation.checkInDate) newErrors.checkInDate = 'This field is required.';
    if (!reservation.checkOutDate) newErrors.checkOutDate = 'This field is required.';
    if (reservation.noOfGuests <= 0) newErrors.noOfGuests = 'Guests must be more than 0.';
    if (reservation.noOfRooms <= 0) newErrors.noOfRooms = 'Rooms must be more than 0.';
    if (selectedRooms.length === 0) newErrors.roomIds = 'At least one room must be selected.';
    if (!reservation.reservedBy) newErrors.reservedBy = 'Reserved By is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrMsgs(newErrors);
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill all fields and select at least one room.',
      });
      return;
    }

    const payload = {
      ...reservation,
      // user: { userId: reservation.userId },
      user:userId,
      // reservedBy: reservation.userId
      reservedBy:customerId,
      checkInDate: formatDate(reservation.checkInDate),
      checkOutDate: formatDate(reservation.checkOutDate),
      noOfRooms: selectedRooms.length,
      roomIds: selectedRooms,
    };

    try {

      const response = await HotelService.createReservation(payload);
          // console.log("this is reservation",reservation)

      // Handle response if full Axios response object
      if (response.status) {
        if (response.status === 201 && response.data && response.data.reservationId) {
          const reservationId = response.data.reservationId;

          Swal.fire({
            icon: 'success',
            title: 'Reservation Created!',
            text: 'Your reservation was successfully created.',
          });

          navigate('/confirmationdetails', { state: { reservationId: reservationId } });
        } else {
          throw new Error("Reservation ID missing in response");
        }
      } else {
        // Handle response if just data object
        if (response && response.reservationId) {
          const reservationId = response.reservationId;
          Swal.fire({
            icon: 'success',
            title: 'Reservation Created!',
            text: 'Your reservation was successfully created.',
          });

          navigate('/confirmationdetails', { state: { reservationId } });
        } else {
          throw new Error("Reservation ID missing in response");
        }
      }
    } catch (err) {
      console.error("Reservation error", err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong while creating the reservation.',
      });
    }
  };
  const glass = {
    background: 'rgba(255,255,255,0.30)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.18)',
  };
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: 'url("/images/location.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        imageRendering: 'auto',
        transform: 'translateZ(0)'
      }}
    >
      <button
        onClick={() => navigate(-1)}
        className='btn btn-secondary btn-sm'
        style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
      >
        ← Back
      </button>
      <div style={{

        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}></div>
      <div className="container d-flex justify-content-center align-items-center" style={{
        minHeight: '100vh',

        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          ...glass,
          maxWidth: '600px',
          width: '80%',
          padding: '2rem',

        }}>
          <h3 className="text-center mb-4" style={{
            color: 'black',
            textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6',
            fontWeight: 'bold',
            animation: 'neon 1.5s ease-in-out infinite alternate'
          }}>RESERVATION</h3>
          <Container
            className="shadow-lg"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '16px',
              padding: '2.5rem',
              float: 'center',
              maxWidth: '500px',
            }}
          >

            <Form onSubmit={handleSubmit} style={{ marginLeft: "40px" }}>

              {/* <Row className="mb-3">
                <Col md={12}>
                  <Form.Label>Users</Form.Label>
                  <Form.Select
                    name="userId"
                    value={reservation.userId}
                    onChange={handleChange}
                  >
                    <option value="">-- Select User --</option>
                    {users.map((user) => (
                      <option key={user.userId} value={user.userId}>
                        {user.userName}
                      </option>
                    ))}
                  </Form.Select>
                  {errMsgs.userId && <div className="text-danger">{errMsgs.userId}</div>}
                </Col>
              </Row> */}


              <Row className="mb-3">
                <Col>
                  <Form.Label><b>Status</b></Form.Label>
                  <div style={{ display: 'flex', gap: '5rem', fontSize: '1.1rem', marginLeft: '30px' }}>
                    <Form.Check
                      type="radio"
                      label="Provisional"
                      name="bookingStatus"
                      value="Provisional"
                      onChange={handleChange}
                      checked={reservation.bookingStatus === 'Provisional'}
                    />
                    <Form.Check
                      type="radio"
                      label="Confirmed"
                      name="bookingStatus"
                      value="Confirmed"
                      onChange={handleChange}
                      checked={reservation.bookingStatus === 'Confirmed'}
                    />
                  </div>
                  {errMsgs.bookingStatus && <div className="text-danger">{errMsgs.bookingStatus}</div>}
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={12}>
                  <Form.Label><b>Guests</b></Form.Label>
                  <Form.Control
                    type="number"
                    name="noOfGuests"
                    placeholder="No. of Guests"
                    value={reservation.noOfGuests}
                    onChange={handleChange}
                  />
                  {errMsgs.noOfGuests && <div className="text-danger">{errMsgs.noOfGuests}</div>}
                </Col>

              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  <Form.Label><b>Rooms</b></Form.Label>
                  <Form.Control

                    name="noOfRooms"
                    placeholder="No. of Rooms"
                    value={reservation.noOfRooms}
                    onChange={handleChange}
                  />
                  {errMsgs.noOfRooms && <div className="text-danger">{errMsgs.noOfRooms}</div>}
                </Col>
              </Row>

              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="btn btn-success px-5 py-2"
                  style={{ fontSize: '1.1rem', borderRadius: '8px' }}
                >
                  Submit Reservation
                </button>
              </div>
            </Form>
          </Container>
        </div>
      </div>
    </div>

  );
};
