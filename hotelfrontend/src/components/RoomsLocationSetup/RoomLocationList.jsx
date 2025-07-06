import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HotelService } from '../HotelService/HotelService';

const RoomLocationList = () => {
  const [roomLocation, setRoomLocation] = useState([]);
  const navigate = useNavigate();

  const listofRoomLocation = async () => {
    try {
      const response = await HotelService.listofRoomLocation();
      setRoomLocation(response?.data);
    } catch (error) {
      console.error('Error fetching room location:', error);
    }
  };

  useEffect(() => {
    listofRoomLocation();
  }, []);

  const addRoomLocation = () => navigate('/addRoomLocation');
  const handleUpdate = (locationId) =>
    navigate(`/updateRoomLocation/${locationId}`, { state: { roomData: locationId } });

  const glass = {
    background          : 'rgba(255,255,255,0.30)',
    backdropFilter      : 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border              : '1px solid rgba(255,255,255,0.18)',
  };

  return (
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
      {/* back button */}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-secondary btn-sm"
        style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
      >
        ← Back
      </button>

      {/* centred glass panel */}
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
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
            <h2 style={{ color: 'black', margin: 0 }}>Room Location Setup</h2>
            <button className="btn btn-primary" onClick={addRoomLocation}>
              + Add Room Location
            </button>
          </div>

          {/* scrollable table wrapper */}
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
                  {['S.No', 'Room Type Name', 'Direction', 'Floor No', 'Total Rooms', 'Action'].map(
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

              <tbody>
                {roomLocation.map((room, index) => (
                  <tr key={room.locationId}>
                    <td style={{ ...glass, textAlign: 'center' }}>{index + 1}</td>
                    <td style={{ ...glass, textAlign: 'center' }}>{room.roomTypeName}</td>
                    <td style={{ ...glass, textAlign: 'center' }}>{room.direction}</td>
                    <td style={{ ...glass, textAlign: 'center' }}>{room.floorNumber}</td>
                    <td style={{ ...glass, textAlign: 'center' }}>{room.count}</td>
                    <td style={{ ...glass, textAlign: 'center' }}>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleUpdate(room.locationId)}
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
  );
};

export default RoomLocationList;
