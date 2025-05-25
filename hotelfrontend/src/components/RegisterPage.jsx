import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HotelService } from './HotelService/HotelService';
import Swal from 'sweetalert2';

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
    pinCode: '',
    city: '',
    role: {
      roleId: 1,
    },
  });

  const [errMsgs, setErrMsgs] = useState({
    userName: '',
    email: '',
    password: '',
    contactNumber: '',
    dob: '',
    permanentAddress: '',
    temporaryAddress: '',
    pinCode: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));

    const updatedErrors = { ...errMsgs };

    switch (name) {
      case 'userName':
  updatedErrors.userName =
    value === '' ? 'Username is required' :
    value.length > 45 ? 'Username must be less than 45 characters' :
    !/^[A-Za-z]+$/.test(value) ? 'Username must contain only letters' : '';
  break;

      case 'email':
        updatedErrors.email =
          value === '' ? 'Email is required' :
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Enter a valid email address' : '';
        break;

      case 'password':
        updatedErrors.password =
          value === '' ? 'Password is required' :
          value.length < 8 ? 'Password must be at least 8 characters' : '';
        break;

      case 'contactNumber':
        updatedErrors.contactNumber =
          value === '' ? 'Contact number is required' :
          !/^\d{10}$/.test(value) ? 'Contact number must be exactly 10 digits' : '';
        break;

      case 'dob':
        updatedErrors.dob = value === '' ? 'Date of Birth is required' : '';
        break;

      case 'permanentAddress':
        updatedErrors.permanentAddress =
          value === '' ? 'Permanent address is required' :
          value.length > 225 ? 'Address must be less than 225 characters' : '';
        break;

      case 'temporaryAddress':
        updatedErrors.temporaryAddress =
          value === '' ? 'Temporary address is required' :
          value.length > 225 ? 'Address must be less than 225 characters' : '';
        break;

      case 'pinCode':
        updatedErrors.pinCode =
          value === '' ? 'Pincode is required' :
          !/^\d{6}$/.test(value) ? 'Pincode must be exactly 6 digits' : '';
        break;

      case 'city':
        updatedErrors.city =
          value === '' ? 'City is required' :
          value.length > 45 ? 'City must be less than 45 characters' : '';
        break;

      default:
        break;
    }

    setErrMsgs(updatedErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errMsgs).some((msg) => msg !== '') ||
                      Object.values(user).some((val) => typeof val === 'string' && val.trim() === '');

    if (hasErrors) {
      Swal.fire({
        icon: 'error',
        title: 'Please fix validation errors before submitting',
      });
      return;
    }

    try {
      const response = await HotelService.createRegister(user);
      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Register created successfully',
        });
        navigate("/login");
      }
    } catch (err) {
      console.error("Error saving register", err);
    }
  };

  return (
    <div className="login">
      <img
        src="/images/Bellagio-Hotel-Casino-Las-Vegas.webp"
        alt="Hotel Frame"
        className="img-fluid w-100 shadow-sm"
      />
      <div className="position-absolute text-white translate-middle top-50 start-50">
        <div className="register-box">
          <h1>Register</h1>
          <Form className="form2" onSubmit={handleSubmit}>
            <Form.Group>
              <Row>
                <Col md={12}>
                  <Form.Label>UserName:</Form.Label>
                  <Form.Control
                    type="text"  placeholder="Enter the username" name="userName"  onChange={handleChange}  value={user.userName}
                  />
                  {errMsgs.userName && <small className="text-danger">{errMsgs.userName}</small>}
                </Col>
              </Row>

              <Row className="mt-3">
                <Col md={6}>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="text"  placeholder="Enter the email"  name="email"  onChange={handleChange}  value={user.email}
                  />
                  {errMsgs.email && <small className="text-danger">{errMsgs.email}</small>}
                </Col>
                <Col md={6}>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"  placeholder="Enter the password"  name="password"  onChange={handleChange}  value={user.password}
                  />
                  {errMsgs.password && <small className="text-danger">{errMsgs.password}</small>}
                </Col>
              </Row>

              <Row className="mt-3">
                <Col md={6}>
                  <Form.Label>DOB:</Form.Label>
                  <Form.Control 
                   type="date"  name="dob"  onChange={handleChange}  value={user.dob}
                  />
                  {errMsgs.dob && <small className="text-danger">{errMsgs.dob}</small>}
                </Col>
                <Col md={6}>
                  <Form.Label>Contact:</Form.Label>
                  <Form.Control
                    type="text"  placeholder="Enter the contact"  name="contactNumber"  onChange={handleChange}  value={user.contactNumber}
                  />
                  {errMsgs.contactNumber && <small className="text-danger">{errMsgs.contactNumber}</small>}
                </Col>
              </Row>

              <Form.Label className="mt-3">Permanent Address:</Form.Label>
              <Form.Control
                type="text"  placeholder="Enter the address"  name="permanentAddress"  onChange={handleChange}  value={user.permanentAddress}
              />
              {errMsgs.permanentAddress && <small className="text-danger">{errMsgs.permanentAddress}</small>}

              <Form.Label className="mt-3">Temporary Address:</Form.Label>
              <Form.Control
                type="text"  placeholder="Enter the address"  name="temporaryAddress"  onChange={handleChange}  value={user.temporaryAddress}
              />
              {errMsgs.temporaryAddress && <small className="text-danger">{errMsgs.temporaryAddress}</small>}

              <Row className="mt-3">
                <Col md={6}>
                  <Form.Label>City:</Form.Label>
                  <Form.Control
                    type="text"  placeholder="Enter the city"  name="city"  onChange={handleChange}  value={user.city}
                  />
                  {errMsgs.city && <small className="text-danger">{errMsgs.city}</small>}
                </Col>
                <Col md={6}>
                  <Form.Label>Pincode:</Form.Label>
                  <Form.Control
                    type="text"  placeholder="Enter the pincode"  name="pinCode"  onChange={handleChange}  value={user.pinCode}
                  />
                  {errMsgs.pinCode && <small className="text-danger">{errMsgs.pinCode}</small>}
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