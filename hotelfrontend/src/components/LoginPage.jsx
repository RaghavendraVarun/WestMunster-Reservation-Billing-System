import React, { useState } from 'react'

import { Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { HotelService } from './HotelService/HotelService';
import Swal from 'sweetalert2';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = { ...user };

    try {
      const response = await HotelService.loginUser(users);

      // Logging response to debug
      console.log("API Response:", response.data);
      if (response?.status === 200) {
        navigate("/homepage");
        Swal.fire({
          title:"Log in successfully",
          icon:'success',
          showCancelButton:false
        });
      }

      // if (
      //     response.data.email === users.email &&
      //     response.data.password === users.password
      // ) {
      //     console.log("Login successful:", response.data.email);
      //     navigate("/Homepage");
      // } else {
      //     alert("User details are mismatched");
      // }
    } catch (err) {
      console.error("Error logging in user:", err);
      alert("Wrong login details.");
    }
  };
  return (
    <div className="login">
      <img src="/images/Bellagio-Hotel-Casino-Las-Vegas.webp" alt="Hotel Frame" className="img-fluid w-100 shadow-sm" />
      <div class='position-absolute text-white translate-middle top-50 start-50'>
        <div className="login-box">
          <h1>Login</h1>
          <Form className="form2" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>UserName:</Form.Label>
              <Form.Control type="email" placeholder="Enter user email" name="email" onChange={handleChange} value={user.email} />
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Enter user password" name="password" onChange={handleChange} value={user.password} />
            </Form.Group>
            <button type="submit" style={{ margin: "10px 100px" }}>Submit</button>
            <p>Create your Account <Link to="/register">Register</Link> </p>
          </Form>
        </div>
      </div>
    </div>
  )
}
