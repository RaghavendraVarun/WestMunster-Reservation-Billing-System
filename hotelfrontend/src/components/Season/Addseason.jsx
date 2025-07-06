import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HotelService } from '../HotelService/HotelService';

const Addseason = () => {
    const [formData, setFormData] = useState({
        roomTypeId: '',
        seasonName: '',
        price: '',
        endDate: null,
        startDate: null,
        userId: parseInt(localStorage.getItem("userId")) 
    });
    const navigate = useNavigate()
    const [seasonTypes, setSeasonTypes] = useState();
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

    useEffect(() => {
        const fetchSeasonTypes = async () => {
            try {
                const response = await HotelService.fetchSeasonTypes();
                setSeasonTypes(response?.data);

            } catch (error) {
                console.error('Error fetching room location:', error);
            }
        }
        fetchSeasonTypes();


    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };




    const handleSubmit = async (e) => {
        e.preventDefault();

        const { seasonName, price, endDate, startDate,roomTypeId } = formData;

        if (!seasonName || !price || !endDate || !startDate  ||!roomTypeId) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            console.log('Submitting form with data:', formData);

            const response = await HotelService.createSeason({
                ...formData,
                roomTypeId: parseInt(formData.roomTypeId)  // Ensure it's a number
            });
            console.log(response);
            
            if (response.status === 200) {
                alert('Season created Succussfully');
                navigate("/seasonlist")
            }

            console.log('Form Submitted:', formData);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong while submitting.');
        }

        // Reset form after submission
        setFormData({
            seasonName: '',
            price: '',
            endDate: null,
            startDate: null,
            userId: parseInt(localStorage.getItem("roleId")) || 0
        });
    };
    return (
        <div    style={{
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
                    }}>Add Season</h3>

                    <form onSubmit={handleSubmit} className="border p-4 shadow rounded" style={{
                        backdropFilter: 'blur(5px)'
                    }}>
                        <div className="mb-3">
                            <label htmlFor="roomTypeName" className="form-label fw-bold">Room Type</label>
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
                            <label htmlFor="seasonName" className="form-label fw-bold">Season Name</label>
                            <input
                                className="form-control"
                                id="seasonName"
                                name="seasonName"
                                placeholder="Enter Season Name"
                                value={formData.seasonName}
                                onChange={handleChange}
                                type="text"
                                style={{ padding: '10px' }}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="price" className="form-label fw-bold">Price</label>
                            <input
                                className="form-control"
                                id="price"
                                name="price"
                                placeholder="Enter price"
                                value={formData.price}
                                onChange={handleChange}
                                type="number"
                                style={{ padding: '10px' }}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="startDate" className="form-label fw-bold">Start Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="startDate"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}

                                min="1"
                                style={{ padding: '10px' }}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="endDate" className="form-label fw-bold">End Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="endDate"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
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

export default Addseason;