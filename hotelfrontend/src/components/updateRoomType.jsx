import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { HotelService } from './HotelService/HotelService';

export const UpdateRoomType = () => {
    const { roomId } = useParams();
    const location = useLocation();
    const roomTypeId = location?.state?.roomData;
const userId= localStorage.getItem("userId");

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        roomTypeName: '',
        totalRoom: '',
        capacity: '',
        updatedBy:userId
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRoomData(roomTypeId);
    }, []);

    const fetchRoomData = async (roomTypeId) => {
        try {
            const response = await HotelService.fetchbyId(roomTypeId);

            if (response.data) {
                setFormData({
                    roomTypeName: response.data.roomTypeName,
                    totalRoom: response.data.totalRoom,
                    capacity: response.data.capacity,

                });
            } else {
                throw new Error('No data received');
            }
        } catch (error) {
            setError('Failed to load room data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await HotelService.updateRoom(roomTypeId, formData);
            alert('Room Type updated successfully!');
            navigate("/roomTypeFetchall");
        } catch (error) {
            alert(`Failed to update room type: ${error.response?.data?.message || error.message}`);
        }
    };

    if (loading) {
        return <div className="text-center mt-5">Loading room data...</div>;
    }

    if (error) {
        return (
            <div className="alert alert-danger mt-5">
                {error}
                <button onClick={() => window.location.reload()} className="btn btn-link">
                    Try again
                </button>
            </div>
        );
    }

    return (
        <div style={{ position: 'relative', minHeight: '70vh' }}>
            <img 
                src="/images/room.jpg" 
                alt="Hotel Frame"
                className="img-fluid w-100 shadow-sm"
                style={{
                    height: '85vh',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1
                }}
            />
            <button
                onClick={() => navigate(-1)}
                className='btn btn-secondary btn-sm'
                style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
            >
                ← Back
            </button>

            <div
                className="container d-flex justify-content-end align-items-center"
                style={{
                    height: '80vh',
                    maxWidth: '500px',
                    marginRight: '2rem' // add right margin so it’s not stuck to edge
                }}
            >
                <div className="w-100">
                    <h3
                        className="text-center mb-4"
                        style={{
                            color: 'black',
                            textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6',
                            fontWeight: 'bold',
                            animation: 'neon 1.5s ease-in-out infinite alternate'
                        }}
                    >
                        Update Room Type
                    </h3>

                    <form
                        onSubmit={handleSubmit}
                        className="border p-4 shadow rounded"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
                    >
                        <div className="mb-3">
                            <label className="form-label">Room Type</label>
                            <input
                                className="form-control"
                                name="roomTypeName"
                                placeholder="Enter Room Type"
                                value={formData.roomTypeName}
                                onChange={handleChange}
                                type="text"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Total Rooms</label>
                            <input
                                type="number"
                                className="form-control"
                                name="totalRoom"
                                value={formData.totalRoom}
                                onChange={handleChange}
                                placeholder="Enter total number of rooms"
                                min="1"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Capacity</label>
                            <input
                                type="number"
                                className="form-control"
                                name="capacity"
                                value={formData.capacity}
                                onChange={handleChange}
                                placeholder="Enter capacity"
                                min="1"
                                required
                            />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-success px-4">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
