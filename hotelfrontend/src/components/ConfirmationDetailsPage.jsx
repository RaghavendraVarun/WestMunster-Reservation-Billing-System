import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HotelService } from "./HotelService/HotelService";
import { useLocation, useNavigate } from 'react-router-dom';

export const ConfirmationDetailsPage = () => {
  const location = useLocation();
  // const roomNos=location.state?.selectedRooms;
  // const totalCost=location.state?.totalCost;
  const [reservation, setReservation] = useState({
    reservationId: '',
    message: '',
    bookingStatus:'',
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: '',
    numberOfRooms:'',
    totalCost: '',
    reservedBy:'',
    roomIds: '',
  });
  
  const navigate = useNavigate();
  const reserveId = location.state?.reservationId;
  
  useEffect(() => {
  if (!reserveId) return;

  const fetchReservation = async () => {
    try {
      const response = await HotelService.reservationlistbyId(reserveId);
      // console.log(response)
      const data=response.data;
      console.log("reserve is:",data)
      // setReservation({...});
      // setReservation(response.data);
      
    setReservation({
      reservationId: data.reservationId || '',
      message: data.message || '',
      bookingStatus: data.bookingStatus || '',
      checkInDate: data.checkInDate || '',
      checkOutDate: data.checkOutDate || '',
      numberOfGuests: data.numberOfGuests?.toString() || '',
      numberOfRooms: data.numberOfRooms?.toString() || '',
      totalCost: data.totalCost?.toString() || '',
      reservedBy: data.reservedBy?.toString() || '',
      roomIds: Array.isArray(data.roomIds) ? data.roomIds.join(', ') : data.roomIds || '',
    });

    localStorage.setItem("resId",data.reservationId)

    } catch (error) {
      console.error('Error fetching reservation:', error);
    }
  };

  fetchReservation();
}, [reserveId]);


  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: "url('/images/hotel.frame.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '2rem',
        position: 'relative',
      }}
    >
      <button
        onClick={() => navigate(-1)}
        className='btn btn-secondary btn-sm'
        style={{
          position: 'absolute',
          top: '80px',
          left: '1rem',
          zIndex: 10,
        }}
      >
        ← Back
      </button>

      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          color: 'white',
          padding: '2rem',
          borderRadius: '10px',
          width: '400px',
          maxWidth: '90%',
        }}
      >
        <h4
          style={{
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          Reservation Details
        </h4>

        {/* <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '2rem' }}>
          {reservation.roomTypeName}
        </p> */}

        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            color: 'white',
            float:'center',
            
          }}
        >
          <tbody>
            <tr>
              <td style={{ padding: '8px', border: '1px solid white' }}>Reservation ID:</td>
              <td style={{ padding: '8px', border: '1px solid white' }}>{reservation.reservationId}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', border: '1px solid white' }}>Check-in:</td>
              <td style={{ padding: '8px', border: '1px solid white' }}>{reservation.checkInDate}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', border: '1px solid white' }}>Check-out:</td>
              <td style={{ padding: '8px', border: '1px solid white' }}>{reservation.checkOutDate}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', border: '1px solid white' }}>Room IDs:</td>
              <td style={{ padding: '8px', border: '1px solid white' }}>{reservation.roomIds}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', border: '1px solid white' }}>Guests:</td>
              <td style={{ padding: '8px', border: '1px solid white' }}>{reservation.numberOfGuests}</td>
            </tr>

             <tr>
              <td style={{ padding: '8px', border: '1px solid white' }}>Number of Rooms:</td>
              <td style={{ padding: '8px', border: '1px solid white' }}>{reservation.numberOfRooms}</td>
            </tr>
            
        
            <tr>
              <td style={{ padding: '8px', border: '1px solid white' }}>Total Amount:</td>
              <td style={{ padding: '8px', border: '1px solid white' }}>{reservation.totalCost}</td>
            </tr>
           
          </tbody>
        </table>

        <div className='text-center mt-4'>
          <button
            type='button'
            className='btn btn-primary px-4 py-2'
            style={{
              fontWeight: '600',
              fontSize: '1rem',
              minWidth: '120px',
              background: 'linear-gradient(to right, #0062E6, #33AEFF)',
              border: 'none',
              borderRadius: '50px',
            }}
            onClick={() => navigate('/payment')}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
