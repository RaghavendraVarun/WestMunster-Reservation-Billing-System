import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HotelService } from './HotelService/HotelService';

export const ReservationUserList = () => {
    const [reservations, setReservations] = useState([]);
    const navigate = useNavigate();
    const userId = parseInt(localStorage.getItem("userId")); 
    console.log("User ID from localStorage:", userId); // should match database userId


    useEffect(() => {
        if (userId) {
            listReservation(userId);
        } else {
            console.error("User ID not found in localStorage");
        }
    }, [userId]);

    const listReservation = async (userId) => {
        try {
            const response = await HotelService.reservationlistbyuserId(userId);
            console.log("Reservation list is:", response);

            setReservations(response?.data || []);
        } catch (error) {
            console.error('Error fetching reservation list:', error);
        }
    };

    const addReservation = () => {
        navigate("/reservation");
    };

    const handleUpdate = (reservationId) => {
        navigate(`/updatereservation/${reservationId}`, {
            state: { formData: reservationId }
        });
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        return dateString.substring(0, 10);
    };

    return (
        <div>
            <div style={{ position: 'relative', minHeight: '100vh' }}>
                <img
                    src="/images/Bellagio-Hotel-Casino-Las-Vegas.webp"
                    alt="Hotel Frame"
                    className="img-fluid w-100 shadow-sm"
                    style={{ height: '100vh', objectFit: 'cover' }}
                />
                <button
                    onClick={() => navigate(-1)}
                    className='btn btn-secondary btn-sm'
                    style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
                >
                    ← Back
                </button>
                <div className='position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center'>
                    <div style={{
                        width: '75%',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        padding: '20px',
                        borderRadius: '5px',
                        maxHeight: '80vh',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '15px',
                            flexShrink: 0
                        }}>
                            <h2 style={{ color: "black", margin: 0 }}>Reservation</h2>
                            {/* <button className='btn btn-primary' onClick={addReservation}>
                                + Add Reservation
                            </button> */}
                        </div>

                        <div style={{
                            overflow: 'auto',
                            flexGrow: 1,
                            position: 'relative'
                        }}>
                            <table className="table table-bordered table-hover" style={{ width: '100%', margin: 0 }}>
                                <thead style={{
                                    position: 'sticky',
                                    top: 0,
                                    backgroundColor: '#f8f9fa',
                                    zIndex: 2
                                }}>
                                    <tr>
                                        <th style={{ width: '10%', textAlign: 'center' }}>S.No</th>
                                        <th style={{ textAlign: 'center' }}>Reservation ID</th>
                                        <th style={{ textAlign: 'center' }}>Booking Status</th>
                                        <th style={{ textAlign: 'center' }}>Check-In Date</th>
                                        <th style={{ textAlign: 'center' }}>Check-Out Date</th>
                                        <th style={{ textAlign: 'center' }}>Number of Rooms</th>
                                        <th style={{ textAlign: 'center' }}>Total Cost</th>
                                        <th style={{ textAlign: 'center' }}>Number of Guests</th>
                                        {/* <th style={{ width: '20%', textAlign: 'center' }}>Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {reservations.map((reservation, index) => (
                                        <tr key={reservation.reservationId}>
                                            <td style={{ textAlign: 'center' }}>{index + 1}</td>
                                            <td style={{ textAlign: 'center' }}>{reservation?.reservationId}</td>
                                            <td style={{ textAlign: 'center' }}>{reservation?.bookingStatus}</td>
                                            <td style={{ textAlign: 'center' }}>{formatDate(reservation?.checkInDate)}</td>
                                            <td style={{ textAlign: 'center' }}>{formatDate(reservation?.checkOutDate)}</td>
                                            <td style={{ textAlign: 'center' }}>{reservation?.numberOfRooms}</td>
                                            <td style={{ textAlign: 'center' }}>{reservation?.totalCost}</td>
                                            <td style={{ textAlign: 'center' }}>{reservation?.numberOfGuests}</td>
                                            {/* <td style={{ textAlign: 'center' }}>
                                                <button
                                                    className='btn btn-secondary btn-sm'
                                                    onClick={() => handleUpdate(reservation?.reservationId)}
                                                >
                                                    Update
                                                </button>
                                            </td> */}
                                        </tr>
                                    ))}
                                    {reservations.length === 0 && (
                                        <tr>
                                            <td colSpan="9" className="text-center text-muted">No reservations found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
