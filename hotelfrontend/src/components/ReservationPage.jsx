import React from 'react'
import { Form } from 'react-bootstrap'
import {  Row, Col } from 'react-bootstrap';
export const ReservationPage = () => {
  return (

<div className="login">
  <img src="/images/Bellagio-Hotel-Casino-Las-Vegas.webp" alt="Hotel Frame" className="img-fluid w-100 shadow-sm"/>
  <div className="position-absolute text-white translate-middle top-50 start-50">
    <div className='reservation-box'>
    <h1>Reservation</h1>
    <Form className="form2">
      <Form.Group>
       
        <Row className="mt-6">
          <Col md={6}>
            <Form.Label>Check-in:</Form.Label>
            <Form.Control type="date" placeholder="Enter the date" name="checkin"/>
            </Col>
              <Col md={6}>
            <Form.Label className="mt-6">Check-out:</Form.Label>
            <Form.Control  type="date" placeholder="Enter the date" name="checkout"/>
           </Col>
        </Row>
        <Row className="mt-6">
        <Col md={6}>
        <Form.Label className="mt-6">Total cost:</Form.Label>
        <Form.Control type="number" placeholder="Enter the Amount" name="Amount"/>
        </Col>
       
        <Col md={6}>
            <Form.Label>booking Status:</Form.Label>
            <Form.Control type="text" placeholder="Enter the status" name="status" />
          </Col>
          </Row>
        

        <Row className="mt-6">
          <Col md={6}>
            <Form.Label>noofguests:</Form.Label>
            <Form.Control type="number"  placeholder="Enter the city"  name="noofguests"/>
          </Col>
          <Col md={6}>
            <Form.Label>No of Rooms:</Form.Label>
            <Form.Control type="number" placeholder="Enter the number"  name="noofrooms"  />
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
