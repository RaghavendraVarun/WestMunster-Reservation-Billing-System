import React, { useEffect, useState } from 'react';
import { HotelService } from './HotelService/HotelService';
import { useNavigate } from 'react-router-dom';

const RoomTypeFetchall = () => {
    const [roomTypes, setRoomTypes] = useState([]);
    const navigate = useNavigate();
    console.log("roomTypes", roomTypes);

    useEffect(() => {
        const fetchallRoomtypes = async () => {
            try {
                const response = await HotelService.fetchallRoomtype();
                setRoomTypes(response.data);
            } catch (error) {
                console.error('Error fetching room types:', error);
            }
        };

        fetchallRoomtypes();
    }, []);

    const addRoom = () => {
        navigate("/addRoom");
    };

    // const handleView = (roomTypeId) => {
    //     navigate(`/fetchbyId/${roomTypeId}`);
    // };

    // const handleView = (roomType) => {
    //     navigate(`/fetchbyId/${roomType.roomTypeId}`, { state: { roomData: roomType } });
    // };

    const handleUpdate = (roomTypeId) => {
        navigate(`/updateRoomtype/${roomTypeId}`, { state: { roomData: roomTypeId } });
    };

    return (
        <div>
            <div style={{ position: 'relative', minHeight: '80vh' ,
                  // backgroundImage: 'url(/images/room.jpg)',

            }}>
                <img
                    src="images/room.jpg"
                    alt="Hotel Frame"
                    className="img-fluid w-100 shadow-sm "
                    style={{ height: '80vh', objectFit: 'cover' }}
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
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                             
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
                            <h2 style={{ color: "black", margin: 0 }}>Room Types</h2>
                            <button className='btn btn-primary' onClick={addRoom}>
                                + Add Room Type
                            </button>
                        </div>

                        <div style={{
                            overflow: 'auto',
                            flexGrow: 1,
                            position: 'relative'
                        }}>
                             <table
                                className="table table-bordered table-hover"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.4)', // table background transparency
                                    backdropFilter: 'blur(4px)', // optional: frosted glass
                                    width: '100%',
                                    margin: 0,
                                }}
                                >
                                <thead
                                    style={{
                                    position: 'sticky',
                                    top: 0,
                                    backgroundColor: 'rgba(255, 255, 255, 0.4)', // same transparency
                                    backdropFilter: 'blur(4px)',
                                    zIndex: 2,
                                    }}
                                >
                                    <tr>
                                    <th style={{ textAlign: 'center', backgroundColor: 'transparent' }}>S.No</th>
                                    <th style={{ textAlign: 'center', backgroundColor: 'transparent' }}>Room Type Name</th>
                                    <th style={{ textAlign: 'center', backgroundColor: 'transparent' }}>Total Rooms</th>
                                    <th style={{ textAlign: 'center', backgroundColor: 'transparent' }}>No.Of Peoples</th>
                                    <th style={{ textAlign: 'center', backgroundColor: 'transparent' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {roomTypes.map((room, index) => (
                                    <tr key={room.roomTypeId} style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                                        <td style={{ textAlign: 'center' }}>{index + 1}</td>
                                        <td style={{ textAlign: 'center' }}>{room.roomTypeName}</td>
                                        <td style={{ textAlign: 'center' }}>{room.totalRoom}</td>
                                        <td style={{ textAlign: 'center' }}>{room.capacity}</td>
                                        <td style={{ textAlign: 'center' }}>
                                        <button
                                            className="btn btn-secondary btn-sm"
                                            onClick={() => handleUpdate(room.roomTypeId)}
                                        >
                                            Edit
                                        </button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                                </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomTypeFetchall;