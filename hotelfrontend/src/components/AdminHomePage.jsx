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
        minHeight: '76vh',
        backgroundImage: "url('images/Admin.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '2rem',
        position: 'relative',
      }}
    >
      {/* Back Button */}
      {/* <button
        onClick={() => navigate(-1)}
        className="btn btn-secondary btn-sm"
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 10,
        }}
      >
        Back
      </button> */}

      {/* Form Card */}
      <div
        className="text-white p-4 rounded shadow-lg"
        style={{
          maxWidth: '500px',
          height: '350px',
          width: '100%',
          background:
            'linear-gradient(135deg, rgba(0,0,0,0.75), rgba(58,123,213,0.75), rgba(0,212,255,0.75))',
          marginRight: '3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <h1 className="mb-4 text-center fw-bold text" style={{ fontSize: '1.7rem' }}>
  ADMIN HOME
</h1>


        {/* Step 1: Customer Options */}
        <div style={{ marginBottom: '20px' }}>
         {/* <h5>Customer Type</h5>*/}
          <div
            className="d-flex flex-column gap-2 mt-2"
            style={{ alignItems: 'center' }}
          >
            <button
              className="btn btn-outline-light btn-sm"
              style={{ padding: '8px 20px', fontSize: '1.2rem', width: '300px', marginBottom: '10px' }}
              onClick={() => navigate('/register')}
            >
             <b> New Customer</b>
            </button>
            <button
              className="btn btn-outline-light btn-sm "
              style={{ padding: '8px 14px', fontSize: '1.2rem', width: '300px', marginBottom: '10px' }}
              onClick={() => navigate('/search')}
            >
             <b>Existing Customer</b> 
            </button>
            {/* <button
              className="btn btn-outline-light btn-sm"
              style={{ padding: '6px 14px', fontSize: '1.2rem', width: '300px', marginBottom: '10px' }}
              onClick={() => navigate('/rooms')}
            >
             <b>Reservation</b> 
            </button> */}
          </div>
        </div>

        {/* Step 2: Hotel Setup */}
        <div>
          
          <div className="d-flex justify-content-center gap-2 mt-2">
            <select
              id="hotelSetupSelect"
              className="form-select form-select-sm"
              style={{ maxWidth: '250px', fontSize: '0.85rem', padding: '4px 8px' }}
              value={hotelSetupOption}
              onChange={(e) => setHotelSetupOption(e.target.value)}
            >
              <option value="">Select an option</option>
              <option value="/listfeedback">Feedbacks</option>
              <option value="/seasonList">Seasons</option>
              <option value="/reservationlist">Reservations</option>
              <option value="/roomTypeFetchall">Room Types</option>
              <option value="/roomLocationSetup">Room Location Setup</option>
              <option value="/fetchall">Room Number Allocation</option>
              <option value="/paymentlist">Payments</option>
            </select>

            <button
              className="btn btn-sm fw-semibold px-3"
              style={{
                backgroundColor: 'white',
                color: '#000',
                border: '1px solid #ccc',
              }}
              onClick={handleGoClick}
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};