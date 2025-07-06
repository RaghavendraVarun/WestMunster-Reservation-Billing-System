import React, { useState } from 'react';
import { HotelService } from './HotelService/HotelService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const RoomType = () => {
  const [formData, setFormData] = useState({
    roomTypeName: '',
    totalRoom: '',
    capacity: '',
    userId: parseInt(localStorage.getItem('userId')) || 0,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue =
      name === 'totalRoom' || name === 'capacity' ? parseInt(value) || 0 : value;
    setFormData((prev) => ({ ...prev, [name]: parsedValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { roomTypeName, totalRoom, capacity } = formData;

    if (!roomTypeName || !totalRoom || !capacity) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await HotelService.createRoom(formData);
      if (response.data.status === 'success') {
        Swal.fire({ icon: 'success', title: 'Created Room successfully!' });
        navigate('/roomTypeFetchall');
      } else {
        Swal.fire({ icon: 'error', title: 'Room type already exists!' });
      }
    } catch (error) {
      if (error.response?.status === 409) {
        Swal.fire({
          icon: 'error',
          title: 'Duplicate Room Type!',
          text: 'Please enter a unique room type name.',
        });
      } else {
        Swal.fire({ icon: 'error', title: 'Error', text: 'Submission failed.' });
      }
    }

    setFormData({
      roomTypeName: '',
      totalRoom: '',
      capacity: '',
      userId: parseInt(localStorage.getItem('roleId')) || 0,
    });
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '76vh',
        backgroundImage: 'url(/images/room.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        display: 'flex',
        justifyContent: 'flex-end',  // Align form to the right
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-secondary btn-sm"
        style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
      >
        ← Back
      </button>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="border p-4 shadow rounded"
        style={{
          maxWidth: 500,
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(3px)',
          zIndex: 5,
          marginRight: '2rem',
          textAlign:'left'  // Add some space from the right edge
        }}
      >
        <h3
          className="text-center mb-4"
          style={{
            color: 'black',
            textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6',
            fontWeight: 'bold',
          }}
        >
          Room Type Form
        </h3>

        <div className="mb-3">
          <label htmlFor="roomTypeName" className="form-label fw-bold">
            Room Type
          </label>
          <input
            className="form-control"
            id="roomTypeName"
            name="roomTypeName"
            placeholder="Enter room type"
            value={formData.roomTypeName}
            onChange={handleChange}
            type="text"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="totalRoom" className="form-label fw-bold">
            Total Rooms
          </label>
          <input
            type="number"
            className="form-control"
            id="totalRoom"
            name="totalRoom"
            value={formData.totalRoom}
            onChange={handleChange}
            placeholder="Enter total rooms"
            min="1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="capacity" className="form-label fw-bold">
            Capacity
          </label>
          <input
            type="number"
            className="form-control"
            id="capacity"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            placeholder="Enter capacity"
            min="1"
          />
        </div>

        <div className="text-center mt-4">
          <button
            type="submit"
            className="btn btn-primary px-4 py-2"
            style={{
              fontWeight: 600,
              letterSpacing: '0.5px',
              borderRadius: 50,
              minWidth: 120,
              background: 'linear-gradient(to right, #0062E6, #33AEFF)',
              border: 'none',
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
