import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CustomerHomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: "url('images/customer1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#fff',
        textShadow: '0 0 5px rgba(0,0,0,0.7)',
      }}
    >
      <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem' , color:"white" }}>
        Welcome to Your Dream Stay!!
      </h2>
     
      {/* <div className="d-grid gap-3" style={{ width: '100%', maxWidth: '400px' }}>
        <button
          className="btn btn-success fw-semibold py-2 fs-5"
          onClick={() => navigate('/dates')}
        >
          🏨 New Reservation
        </button>

        <button
          className="btn btn-warning fw-semibold py-2 fs-5"
          onClick={() => navigate('/dates')}
        >
          📅 My Current Reservation
        </button>

        <button
          className="btn btn-info fw-semibold py-2 fs-5"
          onClick={() => navigate('/about')}
        >
          📖 My Hotel History
        </button>
      </div> */}
    </div>
  );
};