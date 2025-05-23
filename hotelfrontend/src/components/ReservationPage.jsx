import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import {  Row, Col } from 'react-bootstrap';
import { HotelService } from './HotelService/HotelService';
import { useNavigate } from 'react-router-dom';
export const ReservationPage = () => {
   const navigate = useNavigate();
   const [reservation, setReservation] = useState({
        bookingStatus: '',
        checkInDate: '',
        checkOutDate: '',
        noOfGuests: '',
        noOfRooms: '',
        
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setReservation((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reservations = { ...reservation };

        try {
           
                const response = await HotelService.createReservation(reservations);
                
                const user=localStorage.getItem("user");
                
                

                console.log(response)
                setReservation(response.data)
                if (response.status === 201) {
                    alert("reservation created successfully");
                    navigate("/login");
                }
        } catch (err) {
            console.log("Error saving reservation", err);
        }
    };

  return (
<div className="login">
  <img src="/images/Bellagio-Hotel-Casino-Las-Vegas.webp" alt="Hotel Frame" className="img-fluid w-100 shadow-sm"/>
  <div className="position-absolute text-white translate-middle top-50 start-50">
    <div className='reservation-box'>
    <h1>Reservation</h1>
    <Form className="form2" onSubmit={handleSubmit}>
      <Form.Group>
        <Row className="mt-6">
        <Col md={6}>
        <Form.Label className="mt-6">status:</Form.Label>
        <Form.Control type="text" placeholder="Enter the status" name="bookingStatus" onChange={handleChange} value={reservation.bookingStatus}/>
        </Col>
        </Row>
        <Row className="mt-6">
          <Col md={6}>
            <Form.Label>Check-in:</Form.Label>
            <Form.Control type="date" placeholder="Enter the date" name="checkInDate" onChange={handleChange} value={reservation.checkInDate}/>
            </Col>
              <Col md={6}>
            <Form.Label className="mt-6">Check-out:</Form.Label>
            <Form.Control  type="date" placeholder="Enter the date" name="checkOutDate"onChange={handleChange} value={reservation.checkOutDate}/>
           </Col>
        </Row>
        <Row className="mt-6">
          <Col md={6}>
            <Form.Label>noofguests:</Form.Label>
            <Form.Control type="number"  placeholder="Enter the city"  name="noOfGuests"onChange={handleChange} value={reservation.noOfGuests}/>
          </Col>
          <Col md={6}>
            <Form.Label>No of Rooms:</Form.Label>
            <Form.Control type="number" placeholder="Enter the number"  name="noOfRooms"  onChange={handleChange} value={reservation.noOfRooms}/>
          </Col>
        </Row>
      </Form.Group>
        <button type="submit" style={{margin:"10px 100px"}}>Submit</button>
    </Form>
  </div>
</div>
</div>
  );
}
