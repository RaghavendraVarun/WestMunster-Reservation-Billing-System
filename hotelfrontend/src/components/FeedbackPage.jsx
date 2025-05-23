import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import {  Col } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import { HotelService } from './HotelService/HotelService';
export const FeedbackPage = () => {
   const navigate = useNavigate();
   const [user, setUser] = useState({
        comment: '',
        rating: '',
        datetime: '',
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
                const response = await HotelService.createFeedback(users);
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
    <h1>FeedBack</h1>
    <Form className="form2" onSubmit={handleSubmit}>
      <Form.Group>
          <Col md={12}>
            <Form.Label>comment:</Form.Label>
            <Form.Control type="text" placeholder="Enter the comment" name="comment" onChange={handleChange} value={user.comment}/>
          </Col>
          <Col md={12}>
            <Form.Label>rating:</Form.Label>
            <Form.Control type="number" placeholder="Enter the rating" name="rating" onChange={handleChange} value={user.rating}/>
            </Col>
              <Col md={12}>
            <Form.Label className="mt-6">datetime:</Form.Label>
            <Form.Control  type="date" placeholder="Enter the datetime" name="datetime" onChange={handleChange} value={user.datetime}/>
           </Col>
      </Form.Group>
        <button type="submit" style={{margin:"10px 100px"}}>Submit</button>
    </Form>
  </div>
</div>
</div>
  );
}
