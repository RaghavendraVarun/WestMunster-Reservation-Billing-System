
import React, { useEffect, useState } from 'react';
import './Roomavailability.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HotelService } from './HotelService/HotelService';

export const RoomAvailability = () => {
  const navigate = useNavigate();
  const [floor, setFloor] = useState(localStorage.getItem('floorNumber') || '1');
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [freeRooms, setFreeRooms] = useState([]);

  const selectedCount = parseInt(localStorage.getItem("selectedDateCount"), 10) || 0;

  // Load values from localStorage
  // const manualStartDate = localStorage.getItem("checkInDate");
  // const manualEndDate = localStorage.getItem("checkOutDate");
  const manualroomType = localStorage.getItem("roomType");
  const selectedRoomdates=localStorage.getItem("selectedDates");
  

  // Fetch free rooms
 const fetchFreeRooms = async (floorNumber) => {
  try {
    // Parse directly from localStorage
    const storedDates = JSON.parse(localStorage.getItem("selectedDates"));
    const firstDate = storedDates[0];
    const lastDate = storedDates[storedDates.length - 1];

    const response = await HotelService.fetchFreeRoomsByRoomType(
      firstDate,
      lastDate,
      manualroomType,
      floorNumber,
    );

    setFreeRooms(response.data);
  } catch (error) {
    console.error('Failed to fetch free rooms:', error);
  }
};

useEffect(() => {
  fetchFreeRooms(floor);
}, [manualroomType, floor]);


  const toggleRoomSelection = (roomId) => {
    setSelectedRooms((prev) =>
      prev.includes(roomId) ? prev.filter(r => r !== roomId) : [...prev, roomId]
    );
  };


  const handleFloorChange = (e) => {
    const selectedFloor = e.target.value;
    setFloor(selectedFloor);
    setSelectedRooms([]);
    localStorage.setItem("floorNumber", selectedFloor);
    // No reload - re-fetch data
    fetchFreeRooms(selectedFloor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("selectedRooms", JSON.stringify(selectedRooms));
    navigate("/reservation");
  };

  const pricePerRoom = parseFloat(localStorage.getItem("roomPrice")) || 100;

  const totalCost = selectedRooms.length * selectedCount * pricePerRoom;

  useEffect(() => {
    localStorage.setItem("totalCost", totalCost);
  }, [totalCost]);

  const glass = {
    background: 'rgba(37, 37, 37, 0.3)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(255,255,255,0.18)',
  };

  return (
    <div>
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
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{
            minHeight: '100vh',
            position: 'relative',
            zIndex: 1,
            left: '100px'
          }}
        >
          <Container className="py-5">
            <div
              style={{
                ...glass,
                width: '50%',
                borderRadius: 10,
                maxHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 8px 32px 0 rgba(11, 11, 11, 0.37)',
                overflow: 'hidden',
                marginLeft: '250px'
              }}
            >
              <div style={{ maxWidth: '1000px', width: '100%', padding: '2rem' }}>
                <h3 className="text-center mb-4" style={{
                  color: 'black',
                  textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6',
                  fontWeight: 'bold',
                  animation: 'neon 1.5s ease-in-out infinite alternate'
                }}>Room Availability</h3>

                <div className="text-center mb-4">
                  <Form.Select
                    value={floor}
                    onChange={handleFloorChange}
                    style={{ width: '200px', margin: '0 auto' }}
                  >
                    <option value="1">Floor 1</option>
                    <option value="2">Floor 2</option>
                    <option value="3">Floor 3</option>
                  </Form.Select>
                </div>

                <Row className="justify-content-center g-4">
                  <Col md={6}>
                    <div className="direction-box p-3 text-center border rounded shadow-sm bg-light">
                      <h5 className="mb-3">Available Rooms</h5>
                      <div className="d-flex flex-wrap justify-content-center gap-2">
                        {freeRooms.length > 0 ? (
                          freeRooms.map(({ roomId, roomNumber }) => (
                            <button
                              key={roomId}
                              className={`room-button btn btn-outline-primary ${selectedRooms.includes(roomId) ? 'active' : ''}`}
                              onClick={() => toggleRoomSelection(roomId)}
                            >
                              {roomNumber}
                            </button>
                          ))
                        ) : (
                          <div>No available rooms</div>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="text-center mt-4" style={{ color: "white" }}>
                  <strong>Selected Room IDs:</strong> {selectedRooms.join(', ') || 'None'}
                </div>
                <div className="text-center mt-2" style={{ color: "white" }}>
                  <strong>Total Cost:</strong> ₹{totalCost}
                </div>

                <div className="text-center">
                  <Button variant="danger" type="submit" className="mt-3 px-4" onClick={handleSubmit}>
                    Reserve
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};