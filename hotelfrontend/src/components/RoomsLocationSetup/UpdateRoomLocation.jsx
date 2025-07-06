// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { HotelService } from '../HotelService/HotelService';

// const UpdateRoomLocation = () => {
//   const { state } = useLocation();
//   const locationId = state?.roomData; // id passed via navigate()
//   const navigate = useNavigate();
//   const userId = localStorage.getItem('userId');

//   console.log("The userId is : ",userId);

//   const [formData, setFormData] = useState({
//     direction: '',
//     floorNumber: '',
//     count: '',
//     roomTypeId: '',
//     updatedBy: userId,
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (locationId) {
//       fetchRoomData(locationId);
//     }
//   }, [locationId]);

//   async function fetchRoomData(id) {
//     try {
//       const { data } = await HotelService.fetchlocationbyId(id);
//       setFormData({
//         direction: data.direction || '',
//         floorNumber: data.floorNumber || '',
//         count: data.count || '',
//         roomTypeId: data.roomTypeId || '',
//         updatedBy: userId,
//       });
//     } catch (err) {
//       console.error(err);
//       setError('Failed to load room data. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   }
  
//   const handleChange = ({ target: { name, value } }) =>
//     setFormData((prev) => ({ ...prev, [name]: value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = { ...formData,
//       user:{userId:userId}
//      }; // Removed id from payload body

//     try {
//       const response = await HotelService.updateLocation(locationId, payload);

//       alert('Room location updated successfully!');
//       navigate('/roomLocationSetup');
//     } catch (err) {
//       alert(`Failed to update room location: ${err.response?.data?.message || err.message}`);
//     }
//   };

//   if (loading) return <div className="text-center mt-5">Loading room data…</div>;
//   if (error)
//     return (
//       <div className="alert alert-danger mt-5">
//         {error}
//         <button onClick={() => window.location.reload()} className="btn btn-link">
//           Try again
//         </button>
//       </div>
//     );

//   return (
//     <div style={{ position: 'relative', minHeight: '100vh' }}>
//       <img
//         src="/images/location.jpg"
//         alt="Hotel Frame"
//         className="img-fluid w-100 shadow-sm"
//         style={{
//           height: '100vh',
//           objectFit: 'cover',
//           position: 'absolute',
//           inset: 0,
//           zIndex: -1,
//         }}
//       />

//       <button
//         className="btn btn-secondary btn-sm"
//         style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
//         onClick={() => navigate(-1)}
//       >
//         ← Back
//       </button>

//       <div
//         className="container d-flex justify-content-end align-items-center"
//         style={{ height: '100vh', paddingRight: '2rem' }}
//       >
//         <form
//           onSubmit={handleSubmit}
//           className="p-4 shadow rounded-4"
//           style={{
//             width: '100%',
//             maxWidth: 500,
//             background: 'rgba(255, 255, 255, 0.30)',
//             backdropFilter: 'blur(14px)',
//             WebkitBackdropFilter: 'blur(14px)',
//             border: '1px solid rgba(255, 255, 255, 0.35)',
//           }}
//         >
//           <h3
//             className="text-center mb-4 fw-bold"
//             style={{
//               color: 'black',
//               textShadow:
//                 '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6',
//               animation: 'neon 1.5s ease-in-out infinite alternate',
//             }}
//           >
//             Update Room Location Setup
//           </h3>

//           <div className="mb-3">
//             <label htmlFor="direction" className="form-label fw-bold">
//               Direction
//             </label>
//             <input
//               id="direction"
//               name="direction"
//               value={formData.direction}
//               onChange={handleChange}
//               placeholder="Enter room direction"
//               type="text"
//               className="form-control"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="floorNumber" className="form-label fw-bold">
//               Floor No
//             </label>
//             <input
//               id="floorNumber"
//               name="floorNumber"
//               value={formData.floorNumber}
//               onChange={handleChange}
//               placeholder="Enter floor number"
//               type="number"
//               min="1"
//               className="form-control"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="count" className="form-label fw-bold">
//               Total Rooms
//             </label>
//             <input
//               id="count"
//               name="count"
//               value={formData.count}
//               onChange={handleChange}
//               placeholder="Enter total number of rooms"
//               type="number"
//               min="1"
//               className="form-control"
//               required
//             />
//           </div>

//           <div className="text-center">
//             <button type="submit" className="btn btn-success px-4">
//               Update
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateRoomLocation;
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HotelService } from '../HotelService/HotelService';

const UpdateRoomLocation = () => {
  const { state } = useLocation();
  const locationId = state?.roomData; // id passed via navigate()
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  console.log("The userId is : ",userId);

  const [formData, setFormData] = useState({
    direction: '',
    floorNumber: '',
    count: '',
    roomTypeId: '',
    updatedBy: userId,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (locationId) {
      fetchRoomData(locationId);
    }
  }, [locationId]);

  async function fetchRoomData(id) {
    try {
      const { data } = await HotelService.fetchlocationbyId(id);
      setFormData({
        direction: data.direction || '',
        floorNumber: data.floorNumber || '',
        count: data.count || '',
        roomTypeId: data.roomTypeId || '',
        updatedBy: userId,
      });
    } catch (err) {
      console.error(err);
      setError('Failed to load room data. Please try again.');
    } finally {
      setLoading(false);
    }
  }
  
  const handleChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { ...formData,
      userId:userId
     }; // Removed id from payload body

    try {
      const response = await HotelService.updateLocation(locationId, payload);

      alert('Room location updated successfully!');
      navigate('/roomLocationSetup');
    } catch (err) {
      alert(`Failed to update room location: ${err.response?.data?.message || err.message}`);
    }
  };

  if (loading) return <div className="text-center mt-5">Loading room data…</div>;
  if (error)
    return (
      <div className="alert alert-danger mt-5">
        {error}
        <button onClick={() => window.location.reload()} className="btn btn-link">
          Try again
        </button>
      </div>
    );

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <img
        src="/images/location.jpg"
        alt="Hotel Frame"
        className="img-fluid w-100 shadow-sm"
        style={{
          height: '100vh',
          objectFit: 'cover',
          position: 'absolute',
          inset: 0,
          zIndex: -1,
        }}
      />

      <button
        className="btn btn-secondary btn-sm"
        style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div
        className="container d-flex justify-content-end align-items-center"
        style={{ height: '100vh', paddingRight: '2rem' }}
      >
        <form
          onSubmit={handleSubmit}
          className="p-4 shadow rounded-4"
          style={{
            width: '100%',
            maxWidth: 500,
            background: 'rgba(255, 255, 255, 0.30)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(255, 255, 255, 0.35)',
          }}
        >
          <h3
            className="text-center mb-4 fw-bold"
            style={{
              color: 'black',
              textShadow:
                '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6',
              animation: 'neon 1.5s ease-in-out infinite alternate',
            }}
          >
            Update Room Location Setup
          </h3>

          <div className="mb-3">
            <label htmlFor="direction" className="form-label fw-bold">
              Direction
            </label>
            <input
              id="direction"
              name="direction"
              value={formData.direction}
              onChange={handleChange}
              placeholder="Enter room direction"
              type="text"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="floorNumber" className="form-label fw-bold">
              Floor No
            </label>
            <input
              id="floorNumber"
              name="floorNumber"
              value={formData.floorNumber}
              onChange={handleChange}
              placeholder="Enter floor number"
              type="number"
              min="1"
              className="form-control"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="count" className="form-label fw-bold">
              Total Rooms
            </label>
            <input
              id="count"
              name="count"
              value={formData.count}
              onChange={handleChange}
              placeholder="Enter total number of rooms"
              type="number"
              min="1"
              className="form-control"
              required
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success px-4">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateRoomLocation;