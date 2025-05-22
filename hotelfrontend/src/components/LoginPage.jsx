import React from 'react'

    import { Form } from "react-bootstrap"
import { Link } from "react-router-dom"

export const LoginPage = () => {
  return (
    <div className="login">
        <img src="/images/Bellagio-Hotel-Casino-Las-Vegas.webp"  alt="Hotel Frame" className="img-fluid w-100 shadow-sm"/>
        <div class='position-absolute text-white translate-middle top-50 start-50'>
          <div className="login-box">
        <h1>Login</h1>
            <Form className="form2">
            <Form.Group>
            <Form.Label>UserName:</Form.Label>
            <Form.Control tyepe="email" placeholder="Enter user email" name="userEmail"/>
            <Form.Label>Password:</Form.Label>
            <Form.Control tyepe="number" placeholder="Enter user password" name="userPassword" />
            </Form.Group>
            <button type="submit" style={{margin:"10px 100px"}}>Submit</button>
            <p>Create your Account <Link to="/registerpage">Register</Link> </p>
            </Form> 
            </div>
            </div>
    </div>
  )
}
  