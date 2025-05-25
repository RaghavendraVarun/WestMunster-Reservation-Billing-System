import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { HotelService } from './HotelService/HotelService';
import Swal from 'sweetalert2';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });
  const [errMsgs, setErrMsgs] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));

    const updatedErrors = { ...errMsgs };

    if (name === 'email') {
      updatedErrors.email = value === "" ? "" :
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Enter valid email address" : "";
    }

    if (name === 'password') {
      updatedErrors.password = value === "" ? "" :
        value.length < 8
          ? "Password must be at least 8 characters" : "";
    }


    setErrMsgs(updatedErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errMsgs.email || errMsgs.password || !user.email || !user.password) {
      Swal.fire({
        icon: 'error',
        title: 'Please enter a valid username and password',
      });
      return;
    }

    try {
      const response = await HotelService.loginUser(user);

      console.log("API Response:", response.data);
      if (response?.status === 200) {
        Swal.fire({
          title: "Log in successfully",
          icon: 'success',
          showCancelButton: false
        });
        navigate("/Homepage");
      }
      else{
        Swal.fire({
          title: "Wrong Password",
          icon: 'error',
          showCancelButton: false
        });
      }
    } catch (err) {
      console.error("Error logging in user:", err);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="login">
      <img src="/images/Bellagio-Hotel-Casino-Las-Vegas.webp" alt="Hotel Frame" className="img-fluid w-100 shadow-sm" />
      <div className='position-absolute text-white translate-middle top-50 start-50'>
        <div className="login-box">
          <h1>Login</h1>
          <Form className="form2" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>UserName:</Form.Label>
              <Form.Control
                type="email"  placeholder="Enter user email"  name="email"  onChange={handleChange}  value={user.email}  isInvalid={!!errMsgs.email}
              />
              <Form.Control.Feedback type="invalid">
                {errMsgs.email}
              </Form.Control.Feedback>

              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"  placeholder="Enter user password"  name="password"  onChange={handleChange}  value={user.password}  isInvalid={!!errMsgs.password}
              />
              <Form.Control.Feedback type="invalid">
                {errMsgs.password}
              </Form.Control.Feedback>
            </Form.Group>
            <button type="submit" style={{ margin: "10px 100px" }}>Submit</button>
            <p>Create your Account <Link to="/register">Register</Link> </p>
          </Form>
        </div>
      </div>
    </div>
  );
};