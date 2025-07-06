import React, { useEffect, useState } from 'react';
import { HotelService } from '../HotelService/HotelService';
import { useNavigate } from 'react-router-dom';

export const FetchAllRoomAllocations = () => {
  const [roomList, setRoomList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllRooms();
  }, []);

  const fetchAllRooms = async () => {
    try {
      const response = await HotelService.fetchallRoomnoAllocation();
      console.log(response.data)
      if (response.status === 200) {
        setRoomList(response?.data);
      } else {
        alert('Failed to fetch room allocations.');
      }
    } catch (error) {
      console.error('Error fetching all room allocations:', error);
    }
  };

  const handleUpdate = (roomId) => {
    navigate(`/update/${roomId}`,{ state: { roomData: roomId } });
  }

//   const handleUpdate = (roomId) => {
//     navigate(/update/${roomId});
//   };

//   const handleView = (roomId) => {
//     navigate(/view/${roomId});
//   };
  const glass = {
    background          : 'rgba(255,255,255,0.30)',
    backdropFilter      : 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border              : '1px solid rgba(255,255,255,0.18)',
  };

  return (
    <div>

      <div
      style={{
        position        : 'relative',
        minHeight       : '100vh',
        backgroundImage : 'url("/images/location.jpg")',
        backgroundSize  : 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
<button
        onClick={() => navigate(-1)}
        className='btn btn-secondary btn-sm'
        style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
      >
        ← Back
      </button>
                <div className='position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center'>
                    <div
          style={{
            ...glass,
            width     : '75%',
            padding   : 20,
            borderRadius: 10,
            maxHeight : '80vh',
            display   : 'flex',
            flexDirection: 'column',
            boxShadow : '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            overflow  : 'hidden',
          }}
        >
          {/* header row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 15,
              flexShrink: 0,
            }}
          >
                            <h2 style={{ color: "black", margin: 0 }}>Room Number Allocation</h2>
                            
                        </div>

                     <div style={{ overflow: 'auto', flexGrow: 1, position: 'relative' }}>
            <table
              className="table table-bordered table-hover"
              style={{ ...glass, width: '100%', margin: 0 }}
            >
              <thead
                style={{
                  position: 'sticky',
                  top: 0,
                  zIndex: 2,
                }}
              >
             
             
             <tr>
                  {['S.No', 'Room Type', 'Direction', 'Floor No', 'Room Number','LandLine contact', 'Action'].map(
                    (h, i) => (
                      <th
                        key={i}
                        style={{
                          ...glass,
                          backgroundColor: 'rgba(255,255,255,0.45) !important',
                          textAlign: 'center',
                          verticalAlign: 'middle',
                          width: i === 0 ? '10%' : i === 5 ? '20%' : 'auto',
                        }}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              {/* <tr>
                <th style={{ width: '10%', textAlign: 'center' }}>S.No</th>
                <th style={{ textAlign: 'center' }}>Room Type</th>
                <th style={{ textAlign: 'center' }}>Room Direction</th>
                <th style={{ textAlign: 'center' }}> FloorNumber</th>
                <th style={{ textAlign: 'center' }}>Room Number</th>
                <th style={{ textAlign: 'center' }}>Landline Contact</th>
                <th  style={{ width: '20%', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead> */}
            <tbody>
              {roomList.map((room, index) => (
                <tr key={room.roomId}>

                   <td style={{ ...glass, textAlign: 'center' }}>{index + 1}</td>
                  <td style={{  ...glass,textAlign: 'center' }}>{room.roomTypeName}</td>
                   <td style={{ ...glass, textAlign: 'center' }}>{room.direction}</td>
                    <td style={{  ...glass,textAlign: 'center' }}>{room.floorNumber}</td>
                    <td style={{ ...glass, textAlign: 'center' }}>{room.roomNumber}</td>
                  <td style={{ ...glass, textAlign: 'center' }}>{room.landLineNumber}</td>
                  <td>
                   <button className="btn btn-secondary btn-sm" onClick={() => handleUpdate(room?.roomId)}>Update</button>
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
