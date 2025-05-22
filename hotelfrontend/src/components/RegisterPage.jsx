import React from 'react'
import { Form } from 'react-bootstrap'
import {  Row, Col } from 'react-bootstrap';
export const RegisterPage = () => {
  return (





<div className="login">
  <img src="/images/Bellagio-Hotel-Casino-Las-Vegas.webp" alt="Hotel Frame" className="img-fluid w-100 shadow-sm"/>
  <div className="position-absolute text-white translate-middle top-50 start-50">
    <div className='register-box'>
    <h1>Register</h1>
    <Form className="form2">
      <Form.Group>
        <Row>
          <Col md={6}>
            <Form.Label>UserName:</Form.Label>
            <Form.Control type="text" placeholder="Enter the firstname" name="userFirstName" />
          </Col>
          <Col md={6}>
            <Form.Label>LastName:</Form.Label>
            <Form.Control type="text" placeholder="Enter the lastname" name="userLastName" />
          </Col>
        </Row>
        <Row className="mt-6">
          <Col md={6}>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" placeholder="Enter the email" name="userEmail"/>
            </Col>
              <Col md={6}>
            <Form.Label className="mt-6">Password:</Form.Label>
            <Form.Control  type="password" placeholder="Enter the password" name="userPassword"/>
           </Col>
        </Row>
        <Row className="mt-6">
        <Col md={6}>
        <Form.Label className="mt-6">Dob:</Form.Label>
        <Form.Control type="date" placeholder="Enter the DOB" name="userDob"/>
        </Col>
       
        <Col md={6}>
            <Form.Label>Contact:</Form.Label>
            <Form.Control type="text" placeholder="Enter the contact" name="userContactNumber" />
          </Col>
          </Row>
        <Form.Label className="mt-6">Permanent Address:</Form.Label>
        <Form.Control type="text"placeholder="Enter the Address" name="userPermanentAddress"/>

        <Form.Label className="mt-6">Temparory Address:</Form.Label>
        <Form.Control type="text"  placeholder="Enter the Address"name="userTemparoryAddress" />

        <Row className="mt-6">
          <Col md={6}>
            <Form.Label>City:</Form.Label>
            <Form.Control type="text"  placeholder="Enter the city"  name="userCity"/>
          </Col>
          <Col md={6}>
            <Form.Label>Pincode:</Form.Label>
            <Form.Control type="text" placeholder="Enter the pincode"  name="userPincode"  />
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
