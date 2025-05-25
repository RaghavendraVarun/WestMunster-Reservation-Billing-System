import React from 'react';

export const ReservationDetailsPage = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: "url('/images/hotel.frame.png')", // Replace with your actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '2rem',
          borderRadius: '10px',
          width: '400px',
          maxWidth: '90%',
        }}
      >
        <h5 style={{ textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold' }}>
          Your Reservation
        </h5>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>DELUXE ROOM:-</p>
        <form>
          <div className="mb-3">
            <label className="form-label">Bookid Number:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Check-in:</label>
            <input type="date" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Check-out:</label>
            <input type="date" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Room No:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Guests:</label>
            <input type="number" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Payment Type:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Total Amount:</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Paid:</label>
            <input type="text" className="form-control"/>
          </div>
        </form>
      </div>
    </div>
  );
};
