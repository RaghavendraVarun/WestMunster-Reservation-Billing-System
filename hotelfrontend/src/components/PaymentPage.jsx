import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import {  Col } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import { HotelService } from './HotelService/HotelService';
export const PaymentPage = () => {
   const navigate = useNavigate();
   const [user, setUser] = useState({
        status: '',
        paymentMode: '',
        amount: '',
        billDateTime: '',
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
                const response = await HotelService.userPayment(users);
                console.log(response)
                //setUser(response.data)
                if (response.status === 201) {
                    alert("payment  successfully");
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
    <h1>Payment</h1>
    <Form className="form2" onSubmit={handleSubmit}>
      <Form.Group>
          <Col md={12}>
            <Form.Label>status:</Form.Label>
            <Form.Control type="number" placeholder="Enter the status" name="status" onChange={handleChange} value={user.status}/>
          </Col>
          <Col md={12}>
            <Form.Label>paymentMode:</Form.Label>
            <Form.Control type="text" placeholder="Enter the paymentMode" name="paymentMode" onChange={handleChange} value={user.paymentMode}/>
            </Col>
            <Col md={12}>
            <Form.Label className="mt-6">amount:</Form.Label>
            <Form.Control  type="number" placeholder="Enter the amount" name="amount" onChange={handleChange} value={user.amount}/>
           </Col>
        <Col md={12}>
        <Form.Label className="mt-6">billDateTime:</Form.Label>
        <Form.Control type="date" placeholder="Enter the billDateTime" name="billDateTime" onChange={handleChange} value={user.billDateTime}/>
        </Col>
      </Form.Group>
      <button type="submit" style={{margin:"10px 100px"}}>Submit</button>
    </Form>
  </div>
</div>
</div>
  );
}
