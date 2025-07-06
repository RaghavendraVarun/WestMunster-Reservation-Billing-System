import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HotelService } from '../HotelService/HotelService';

export const AddRoomLocation = () => {
    const [formData, setFormData] = useState({
        roomTypeId: 0,
        direction: '',
        floorNumber: null,
        count: null,
        userId: parseInt(localStorage.getItem("userId"))
    });
    const navigate = useNavigate();
    const [roomTypes, setRoomTypes] = useState();

    useEffect(() => {
        const fetchRoomTypes = async () => {
            try {
                const response = await HotelService.fetchAllRoomTypes();
                setRoomTypes(response?.data);
            } catch (error) {
                console.error('Error fetching room location:', error);
            }
        }
        fetchRoomTypes();
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        const parsedValue =
            name === 'count' || name === 'floorNumber'
                ? parseInt(value) || 0
                : value;

        setFormData((prev) => ({
            ...prev,
            [name]: parsedValue,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { roomTypeId, count, direction, floorNumber, userId } = formData;
        if (!roomTypeId || !count || !direction || !floorNumber || !userId) {
            alert('Please fill in all fields.');
            return;
        }
        try {
            const res = await HotelService.createRoomLocation({ ...formData, roomTypeId: parseInt(formData.roomTypeId) });
            if (res.data.status === "success") {
                alert('Room Location Submitted Successfully!');
                navigate("/roomLocationSetup");
            }
            else {
                alert(res.data.message);
                navigate("/roomLocationSetup");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong');
        }

        setFormData({
            roomTypeId: '',
            direction: '',
            floorNumber: null,
            count: null,
            userId: parseInt(localStorage.getItem("roleId")) || 0
        });
    };

    return (
        <div
            style={{
                position: 'relative',
                minHeight: '100vh',
                backgroundImage: 'url("/images/location.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'scroll',
                imageRendering: 'auto',
                transform: 'translateZ(0)'
            }}
        >

            <button
                onClick={() => navigate(-1)}
                className='btn btn-secondary btn-sm'
                style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
            >
                ← Back
            </button>

            {/* Overlay without blur */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                // Removed backdropFilter to avoid blur
            }}></div>

            <div className="container d-flex justify-content-center align-items-center" style={{
                minHeight: '100vh',
                position: 'relative',
                zIndex: 1
            }}>
                <div style={{
                    maxWidth: '500px',
                    width: '100%',
                    padding: '2rem',
                    textAlign:'left'
                }}>
                    <h3 className="text-center mb-4" style={{
                        color: 'black',
                        textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6',
                        fontWeight: 'bold',
                        animation: 'neon 1.5s ease-in-out infinite alternate'
                    }}>Add Room Location Setup</h3>

                    <form onSubmit={handleSubmit} className="border p-4 shadow rounded" style={{
                       
                        backdropFilter: 'blur(5px)'
                    }}>
                        <div className="mb-3" style={{}}>
                            <label htmlFor="roomTypeId" className="form-label fw-bold">Room Type</label>
                            <select
                                name="roomTypeId"
                                value={formData.roomTypeId}
                                className="form-select"
                                onChange={handleChange}
                            >
                                <option value="">Select Room Type</option>
                                {roomTypes?.map((room) => (
                                    <option key={room.RoomTypeId} value={room.RoomTypeId}>
                                        {room.RoomTypeName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="direction" className="form-label fw-bold">Direction</label>
                            <input
                                className="form-control"
                                id="direction"
                                name="direction"
                                placeholder="Enter Room Direction"
                                value={formData.direction}
                                onChange={handleChange}
                                type="text"
                                style={{ padding: '10px' }}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="floorNumber" className="form-label fw-bold">Floor No</label>
                            <input
                                type="number"
                                className="form-control"
                                id="floorNumber"
                                name="floorNumber"
                                value={formData.floorNumber || ''}
                                onChange={handleChange}
                                placeholder="Enter floor number"
                                min="1"
                                style={{ padding: '10px' }}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="count" className="form-label fw-bold">Total Rooms</label>
                            <input
                                type="number"
                                className="form-control"
                                id="count"
                                name="count"
                                value={formData.count}
                                onChange={handleChange}
                                placeholder="Enter total number of rooms"
                                min="1"
                                style={{ padding: '10px' }}
                            />
                        </div>

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
    )
}