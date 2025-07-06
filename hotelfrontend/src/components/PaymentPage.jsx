import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { HotelService } from './HotelService/HotelService';
import { Form, Row, Col } from 'react-bootstrap';

export const PaymentPage = () => {
  const totalCost = localStorage.getItem("totalCost");
  const resId=localStorage.getItem("resId");
  const navigate = useNavigate();

  const [user, setUser] = useState({
    reservationId: resId,
    status: '',
    paymentMode: '',
    amount: totalCost,
  });

  const [errMsgs, setErrMsgs] = useState({
    reservationId: '',
    status: '',
    paymentMode: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));

    const errors = { ...errMsgs };

    if (name === 'reservationId') {
      errors.reservationId = value === '' ? 'Reservation ID is required' : '';
    } else if (name === 'status') {
      errors.status = value === '' ? 'Status is required' : '';
    } else if (name === 'paymentMode') {
      errors.paymentMode = value === '' ? 'Payment mode is required' : '';
    } 

    setErrMsgs(errors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasErrors =
      Object.values(errMsgs).some((msg) => msg !== '') ||
      Object.entries(user).some(([key, val]) => val === '' && key !== 'status') ||
      (user.status !== "1" && user.status !== "0");

    if (hasErrors) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please correct all errors before submitting.',
      });
      return;
    }

    const paymentPayload = {
      dateTime: new Date().toISOString().split("T")[0], // e.g., "2025-06-27"
      paymentMode: user.paymentMode.toLowerCase(),       // e.g., "cash"
      amount: Number(user.amount),
      status: parseInt(user.status),                     // 0 or 1
      reservationId: Number(user.reservationId)
    };

    try {
      const response = await HotelService.userPayment(paymentPayload);

      if (response.status === 201 || response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Payment Successful',
          text: 'Thank you for your payment.',
        });
        navigate('/');
      }
    } catch (err) {
      console.error('Error saving payment', err);
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Payment submission failed. Please try again later.',
      });
    }
  };

  return (
    <div style={{
                position: 'relative',
                minHeight: '100vh',
                backgroundImage: 'url("/images/location.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'scroll',
                imageRendering: 'auto',
                transform: 'translateZ(0)'
            }}>
      <button
        onClick={() => navigate(-1)}
        className='btn btn-secondary btn-sm'
        style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
      >
        ← Back
      </button>

      <div style={{
     position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}></div>

      <div className="container d-flex justify-content-center align-items-center" style={{
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '500px', width: '100%', padding: '2rem' ,textAlign:'left'}}>
          <h3 className="text-center mb-4" style={{
            color: 'black',
            textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6',
            fontWeight: 'bold',
            animation: 'neon 1.5s ease-in-out infinite alternate'
          }}>Add Payment</h3>

          <form onSubmit={handleSubmit} className="border p-4 shadow rounded" style={{
            backdropFilter: 'blur(5px)'
          }}>

          

            {/* Payment Mode */}
            <div className="mb-3">
              <label htmlFor="paymentMode" className="text-start d-block mt-3 mb-2 fw-bold"><b>Payment Mode:</b></label>
              <select
                className="form-control"
                id="paymentMode"
                name="paymentMode"
                value={user.paymentMode}
                onChange={handleChange}
                style={{ padding: '10px' }}
              >
                <option value="">Select Payment Mode</option>
                <option value="CreditCard">Credit Card</option>
                <option value="Cash">Cash</option>
              </select>
            </div>

            {/* Amount */}
            <div className="mb-3">
              <label htmlFor="amount" className="text-start d-block mt-3 mb-2 fw-bold"><b>Amount:</b></label>
              <input
                className="form-control"
                id="amount"
                name="amount"
                placeholder="Enter amount"
                value={user.amount}
                onChange={handleChange}
                type="number"
                style={{ padding: '10px' }}
              />
            </div>

            {/* Status */}
            <Row className="mb-3">
              <Col md={12}>
                <Form.Label className="text-start d-block mt-3 mb-2 fw-bold"><b>Status:</b></Form.Label>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <Form.Check
                    type="radio"
                    id="Paid"
                    label="Paid"
                    name="status"
                    value="1"
                    onChange={handleChange}
                    checked={user.status === "1"}
                    style={{ padding: '10px',color:'white' }}
                  />
                  <Form.Check
                    type="radio"
                    id="unpaid"
                    label="Unpaid"
                    name="status"
                    value="0"
                    onChange={handleChange}
                    checked={user.status === "0"}
                    style={{ padding: '10px',color:'white' }}
                  />
                </div>
              </Col>
            </Row>

            {/* Submit Button */}
            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-primary px-4 py-2"
                style={{
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  fontSize: '1rem',
                  minWidth: '120px',
                  background: 'linear-gradient(to right, #0062E6, #33AEFF)',
                  border: 'none',
                  borderRadius: '50px'
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
