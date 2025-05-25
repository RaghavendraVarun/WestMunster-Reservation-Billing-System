import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminHomePage = () => {
  const navigate = useNavigate();
  const [hotelSetupOption, setHotelSetupOption] = useState('');

  const handleGoClick = () => {
    if (hotelSetupOption) {
      navigate(hotelSetupOption);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: "url('/images/hotel.image2.jpeg')", // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div className="container bg-white bg-opacity-75 rounded p-4 shadow" style={{ width: '100%', maxWidth: '1024px' }}>
        
        <h1 className="mb-4 text-center">ADMIN HOME</h1>
        
        <div className="d-flex flex-column gap-3 mb-4">
          <button className="btn btn-primary" onClick={() => navigate('/register')} > New Customer </button>
          <button className="btn btn-secondary" onClick={() => navigate('/search')}> Existing Customer </button>
        </div>

        <div>
          <label htmlFor="hotelSetupSelect" className="form-label"> SELECT HOTEL SETUP </label>
          <div className="d-flex gap-2">
            <select id="hotelSetupSelect" className="form-select" value={hotelSetupOption} onChange={(e) => setHotelSetupOption(e.target.value)}>
              <option value="">Select an option</option>
              <option value="/hotel/reservations">Reservations</option>
              <option value="/hotel/feedbacks">Feedbacks</option>
              <option value="/hotel/seasons">Seasons</option>
              <option value="/hotel/roomtypes">Room Types</option>
              <option value="/hotel/amenities">Amenities</option>
              <option value="/hotel/roomlocation">Room Location Setup</option>
              <option value="/hotel/roomallocation">Room Number Allocation</option>
              <option value="/hotel/payments">Payments</option>
            </select>
            <button className="btn btn-info" onClick={handleGoClick}> Go </button>
          </div>
        </div>
      </div>
    </div>
  );
};
