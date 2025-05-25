import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HotelService } from './HotelService/HotelService';
import Swal from 'sweetalert2';

export const PaymentPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    roomId: '',
    status: '',
    paymentMode: '',
    amount: '',
    billDateTime: '',
  });

  const [errMsgs, setErrMsgs] = useState({
    roomId: '',
    status: '',
    paymentMode: '',
    amount: '',
    billDateTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));

    const errors = { ...errMsgs };

    if (name === 'roomId') {
      errors.roomId = value === '' ? 'Room ID is required' : '';
    } else if (name === 'status') {
      errors.status = value === '' ? 'Booking type is required' : '';
    } else if (name === 'paymentMode') {
      errors.paymentMode = value === '' ? 'Payment mode is required' : '';
    } else if (name === 'amount') {
      errors.amount = value === '' ? 'Amount is required' : '';
    } else if (name === 'billDateTime') {
      errors.billDateTime = value === '' ? 'Billing date is required' : '';
    }

    setErrMsgs(errors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = { ...user };

    const hasErrors =
      Object.values(errMsgs).some((msg) => msg !== '') ||
      Object.values(user).some((val) => val === '');

    if (hasErrors) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please correct all errors before submitting.',
      });
      return;
    }

    try {
      const response = await HotelService.userPayment(users);
      console.log(response);

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Payment Successful',
          text: 'Thank you for your payment.',
        });
        navigate('/login');
      }
    } catch (err) {
      console.log('Error saving payment', err);
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Payment submission failed. Please try again later.',
      });
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
          <h1>Payment</h1>
          <Form className="form2" onSubmit={handleSubmit}>
            <Form.Group>
              <Col md={12}>
                <Form.Label>Room ID:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Room ID"
                  name="roomId"
                  onChange={handleChange}
                  value={user.roomId}
                />
                {errMsgs.roomId && <span style={{ color: 'red' }}>{errMsgs.roomId}</span>}
              </Col>

              <Col md={12}>
                <Form.Label>Booking Type:</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Provisioned"
                    name="status"
                    value="Provisioned"
                    checked={user.status === 'Provisioned'}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Confirmed"
                    name="status"
                    value="Confirmed"
                    checked={user.status === 'Confirmed'}
                    onChange={handleChange}
                  />
                </div>
                {errMsgs.status && <span style={{ color: 'red' }}>{errMsgs.status}</span>}
              </Col>

              <Col md={12}>
                <Form.Label>Payment Mode:</Form.Label>
                <Form.Control
                  as="select"
                  name="paymentMode"
                  onChange={handleChange}
                  value={user.paymentMode}
                >
                  <option value="">Select Payment Mode</option>
                  <option value="Cash">Cash</option>
                  <option value="Card">Card</option>
                  <option value="Cheque">Cheque</option>
                </Form.Control>
                {errMsgs.paymentMode && <span style={{ color: 'red' }}>{errMsgs.paymentMode}</span>}
              </Col>

              <Col md={12}>
                <Form.Label>Amount:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter the amount"
                  name="amount"
                  onChange={handleChange}
                  value={user.amount}
                />
                {errMsgs.amount && <span style={{ color: 'red' }}>{errMsgs.amount}</span>}
              </Col>

              <Col md={12}>
                <Form.Label>Billing Date:</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter the billing date"
                  name="billDateTime"
                  onChange={handleChange}
                  value={user.billDateTime}
                />
                {errMsgs.billDateTime && (
                  <span style={{ color: 'red' }}>{errMsgs.billDateTime}</span>
                )}
              </Col>
            </Form.Group>
            <button type="submit" style={{ margin: '10px 100px' }}>
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};
