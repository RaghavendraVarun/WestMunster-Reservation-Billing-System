import React, { useEffect, useState } from 'react';
import { HotelService } from '../HotelService/HotelService';
import { useLocation, useNavigate } from 'react-router-dom';

export const Roomnoallocation = () => {
  const location = useLocation();
  const roomId = location?.state?.roomData;
  console.log("roomId", roomId);
  const navigate = useNavigate();

  const [roomData, setRoomData] = useState({
    roomNumber: '',
    landLineNumber: '',
    userId: parseInt(localStorage.getItem("userId")),
    locationId: '',
    roomId: roomId
  });

  useEffect(() => {
    if (roomId) {
      fetchRoomById(roomId);
    }
  }, [roomId]);

  const fetchRoomById = async (id) => {
    try {
      const response = await HotelService.getroomnoAllocationById(id);
      console.log(response);
      if (response.status === 200) {
        setRoomData({
          ...response.data,
          landLineNumber: response.data.landLineNumber ?? '', // fallback to empty string if null/undefined
          roomId: id // ensure roomId stays consistent
        });
        console.log(response.data);
      }
    } catch (error) {
      console.error('Error fetching room by ID:', error);
    }
  };

  const addRoomLocation = () => {
    navigate("/addRoomAllocatino");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await HotelService.updateroomnoAllocation(roomData);
      if (response.status === 200) {
        console.log(response.data);
        alert('Room allocation updated successfully!');
        navigate('/fetchall');
      } else {
        alert('Failed to update room allocation');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred during submission');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <button
        onClick={() => navigate(-1)}
        className='btn btn-secondary btn-sm'
        style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
      >
        ← Back
      </button>
      <h1 className="text-center">Update Room Number Allocation</h1>

      <form onSubmit={handleSubmit} className="border p-4 shadow rounded bg-light mb-4">

        <div className="mb-3">
          <label htmlFor="roomNumber" className="form-label">Room Number</label>
          <input
            type="text"
            className="form-control"
            id="roomNumber"
            name="roomNumber"
            value={roomData.roomNumber}
            onChange={handleChange}
            placeholder="Enter room number"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="landLineNumber" className="form-label">Landline Number</label>
          <input
            type="text"
            className="form-control"
            id="landLineNumber"
            name="landLineNumber"
            value={roomData.landLineNumber}
            onChange={handleChange}
            placeholder="Enter landline Number"
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary px-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
