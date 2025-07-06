// import React, { useEffect, useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom';
// import { HotelService } from '../HotelService/HotelService';

// const UpdateSeason = () => {
//     // const { seasonId } = useParams();
//     // console.log("seasonId", seasonId);
// const location = useLocation();
// const seasonId = location?.state?.formData
// console.log("seasonId", seasonId);

//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         seasonName: '',
//         price: '',
//         startDate: '',
//         endDate: '',
//         updateddBy: parseInt(localStorage.getItem("userId")) 
//     });

//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchRoomData(seasonId);
//     }, [seasonId]);

//     const fetchRoomData = async (seasonId) => {
//         // if(roomId){
//         try {
//             console.log(seasonId);
//             // setLoading(true);
//             // setError(null);
//             console.log('Fetching data for room ID:', seasonId);
//             const response = await HotelService.seasonbyId(seasonId);
//             console.log('API Response:', response);

//             if (response.data) {
//                 setFormData({
//                     seasonName: response.data.seasonName,
//                     price: response.data.price,
//                     startDate: response.data.startDate,
//                     endDate: response.data.endDate,

//                 });
//             } else {
//                 throw new Error('No data received');
//             }
//         } catch (error) {
//             console.error('Error fetching room data:', error);
//             setError('Failed to load room data. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//         // }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const seasontype = { ...formData }
//         try {
//             const response = await HotelService.updateseason(seasonId, seasontype);

//             console.log('Update response:', response);
//             alert('Room Type updated successfully!');
//             navigate("/seasonList")
//         } catch (error) {
//             console.error('Error updating room type:', error);
//             alert(`Failed to update room type: ${error.response?.data?.message || error.message}`);
//         }
//     };

//     if (loading) {
//         return <div className="text-center mt-5">Loading season data...</div>;

//     }

//     if (error) {
//         return (
//             <div className="alert alert-danger mt-5">
//                 {error}
//                 <button onClick={() => window.location.reload()} className="btn btn-link">
//                     Try again
//                 </button>
//             </div>
//         );
//     }
//     return (
//         <div style={{ position: 'relative', minHeight: '100vh' }}>
//             <img
//                 src="/images/Bellagio-Hotel-Casino-Las-Vegas.webp"
//                 alt="Hotel Frame"
//                 className="img-fluid w-100 shadow-sm"
//                 style={{
//                     height: '100vh',
//                     objectFit: 'cover',
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     zIndex: -1
//                 }}
//             />
//             <button
//         onClick={() => navigate(-1)}
//         className='btn btn-secondary btn-sm'
//         style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
//       >
//         ← Back
//       </button>
//             <div
//                 className="container d-flex justify-content-center align-items-center"
//                 style={{
//                     height: '100vh',
//                     maxWidth: '500px'
//                 }}
//             >
//                 <div className="w-100">
//                     <h3 className="text-center mb-4" style={{
//                         color: 'black',
//                         textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6',
//                         fontWeight: 'bold',
//                         animation: 'neon 1.5s ease-in-out infinite alternate'
//                     }}>Update Season</h3>
//                     <form onSubmit={handleSubmit} className="border p-4 shadow rounded bg-light">
//                         <div className="mb-3">
//                             <label className="form-label fw-bold">seasonName</label>
//                             <input
//                                 className="form-control"
//                                 name="seasonName"
//                                 placeholder="Enter seasonName"
//                                 value={formData.seasonName}
//                                 onChange={handleChange}
//                                 type="text"
//                             />
//                         </div>

//                         <div className="mb-3">
//                             <label htmlFor="direction" className="form-label fw-bold">price</label>
//                             <input
//                                 className="form-control"
//                                 id="price"
//                                 name="price"
//                                 placeholder="Enter Room price"
//                                 value={formData.price}
//                                 onChange={handleChange}
//                                 type="number"
//                                 style={{ padding: '10px' }}
//                             />
//                         </div>

//                         <div className="mb-3">
//                             <label htmlFor="floorNo" className="form-label fw-bold">startDate</label>
//                             <input
//                                 type="date"
//                                 className="form-control"
//                                 id="startDate"
//                                 name="startDate"
//                                 value={formData.startDate}
//                                 onChange={handleChange}
//                                 min="1"
//                                 style={{ padding: '10px' }}
//                             />
//                         </div>

//                         <div className="mb-3">
//                             <label htmlFor="totalRoom" className="form-label fw-bold">endDate</label>
//                             <input
//                                 type="date"
//                                 className="form-control"
//                                 id="endDate"
//                                 name="endDate"
//                                 value={formData.endDate}
//                                 onChange={handleChange}
//                                 min="1"
//                                 style={{ padding: '10px' }}
//                             />
//                         </div>



//                         <div className="text-center">
//                             <button type="submit" className="btn btn-success px-4">Update</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default UpdateSeason

import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { HotelService } from '../HotelService/HotelService';

const UpdateSeason = () => {
    // const { seasonId } = useParams();
    // console.log("seasonId", seasonId);
    const location = useLocation();
    const seasonId = location?.state?.formData
    console.log("seasonId", seasonId);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        seasonName: '',
        price: '',
        startDate: '',
        endDate: '',
        updateddBy: parseInt(localStorage.getItem("userId"))
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRoomData(seasonId);
    }, [seasonId]);

    const fetchRoomData = async (seasonId) => {
        // if(roomId){
        try {
            console.log(seasonId);
            // setLoading(true);
            // setError(null);
            console.log('Fetching data for room ID:', seasonId);
            const response = await HotelService.seasonbyId(seasonId);
            console.log('API Response:', response);

            if (response.data) {
                setFormData({
                    seasonName: response.data.seasonName,
                    price: response.data.price,
                    startDate: response.data.startDate,
                    endDate: response.data.endDate,

                });
            } else {
                throw new Error('No data received');
            }
        } catch (error) {
            console.error('Error fetching room data:', error);
            setError('Failed to load room data. Please try again.');
        } finally {
            setLoading(false);
        }
        // }
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

        const seasontype = { ...formData }
        try {
            const response = await HotelService.updateseason(seasonId, seasontype);

            console.log('Update response:', response);
            alert('Room Type updated successfully!');
            navigate("/seasonList")
        } catch (error) {
            console.error('Error updating room type:', error);
            alert(`Failed to update room type: ${error.response?.data?.message || error.message}`);
        }
    };

    if (loading) {
        return <div className="text-center mt-5">Loading season data...</div>;

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
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <img
                src="/images/Bellagio-Hotel-Casino-Las-Vegas.webp"
                alt="Hotel Frame"
                className="img-fluid w-100 shadow-sm"
                style={{
                    height: '100vh',
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
                className="container d-flex justify-content-center align-items-center"
                style={{
                    height: '100vh',
                    maxWidth: '500px'
                }}
            >
                <div className="w-100">
                    <h3 className="text-center mb-4" style={{
                        color: 'black',
                        textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6',
                        fontWeight: 'bold',
                        animation: 'neon 1.5s ease-in-out infinite alternate'
                    }}>Update Season</h3>
                    <form onSubmit={handleSubmit} className="border p-4 shadow rounded bg-light">
                        <div className="mb-3">
                            <label className="form-label fw-bold">seasonName</label>
                            <input
                                className="form-control"
                                name="seasonName"
                                placeholder="Enter seasonName"
                                value={formData.seasonName}
                                onChange={handleChange}
                                type="text"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="direction" className="form-label fw-bold">price</label>
                            <input
                                className="form-control"
                                id="price"
                                name="price"
                                placeholder="Enter Room price"
                                value={formData.price}
                                onChange={handleChange}
                                type="number"
                                style={{ padding: '10px' }}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="floorNo" className="form-label fw-bold">startDate</label>
                            <input
                                type="date"
                                className="form-control"
                                id="startDate"
                                name="startDate"
                                value={formData.startDate ? formData.startDate.split('T')[0] : ''}
                                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                min="1"
                                style={{ padding: '10px' }}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="totalRoom" className="form-label fw-bold">endDate</label>
                            <input
                                type="date"
                                className="form-control"
                                id="endDate"
                                name="endDate"
                                value={formData.endDate ? formData.endDate.split('T')[0] : ''}
                                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                             
                                min="1"
                                style={{ padding: '10px' }}
                            />
                        </div>



                        <div className="text-center">
                            <button type="submit" className="btn btn-success px-4">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateSeason