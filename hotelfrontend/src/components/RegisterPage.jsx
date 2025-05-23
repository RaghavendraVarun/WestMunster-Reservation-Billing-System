import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import {  Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HotelService } from './HotelService/HotelService';
export const RegisterPage = () => {

   const navigate = useNavigate();
   const [user, setUser] = useState({
        userName: '',
        email: '',
        password: '',
        contactNumber: '',
        dob: '',
        permanentAddress: '',
        temporaryAddress: '',
        pinCode:'',
        city:'',
        role: {
        roleId:1
        }
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const users = { ...user };
      
        try {
          
              console.log(users);
                const response = await HotelService.createRegister(users);
                console.log(response)
                //setUser(response.data)
                if (response.status === 201) {
                    alert("register created successfully");
                    navigate("/login");
                }
        } catch (err) {
            console.log("Error saving register", err);
        }
    };
  return (
<div className="login">
  <img src="/images/Bellagio-Hotel-Casino-Las-Vegas.webp" alt="Hotel Frame" className="img-fluid w-100 shadow-sm"/>
  <div className="position-absolute text-white translate-middle top-50 start-50">
    <div className='register-box'>
    <h1>Register</h1>
    <Form className="form2" onSubmit={handleSubmit}>
      <Form.Group>
        <Row>
          <Col md={12}>
            <Form.Label>UserName:</Form.Label>
            <Form.Control type="text" placeholder="Enter the username" name="userName" onChange={handleChange} value={user.userName}/>
          </Col>
        
        </Row>
        <Row className="mt-6">
          <Col md={6}>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" placeholder="Enter the email" name="email" onChange={handleChange} value={user.email}/>
            </Col>
              <Col md={6}>
            <Form.Label className="mt-6">Password:</Form.Label>
            <Form.Control  type="password" placeholder="Enter the password" name="password" onChange={handleChange} value={user.password}/>
           </Col>
        </Row>
        <Row className="mt-6">
        <Col md={6}>
        <Form.Label className="mt-6">Dob:</Form.Label>
        <Form.Control type="date" placeholder="Enter the DOB" name="dob" onChange={handleChange} value={user.dob}/>
        </Col>
       
        <Col md={6}>
            <Form.Label>Contact:</Form.Label>
            <Form.Control type="text" placeholder="Enter the contact" name="contactNumber" onChange={handleChange} value={user.contactNumber}/>
          </Col>
          </Row>
        <Form.Label className="mt-6">Permanent Address:</Form.Label>
        <Form.Control type="text"placeholder="Enter the Address" name="permanentAddress" onChange={handleChange} value={user.permanentAddress}/>

        <Form.Label className="mt-6">Temparory Address:</Form.Label>
        <Form.Control type="text"  placeholder="Enter the Address"name="temporaryAddress" onChange={handleChange} value={user.temporaryAddress}/>

        <Row className="mt-6">
          <Col md={6}>
            <Form.Label>City:</Form.Label>
            <Form.Control type="text"  placeholder="Enter the city"  name="city" onChange={handleChange}value={user.city}/>
          </Col>
          <Col md={6}>
            <Form.Label>Pincode:</Form.Label>
            <Form.Control type="text" placeholder="Enter the pincode"  name="pinCode" onChange={handleChange} value={user.pinCode}/>
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
