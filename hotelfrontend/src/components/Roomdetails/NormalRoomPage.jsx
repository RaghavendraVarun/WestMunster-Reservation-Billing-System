import { Row, Col, Container, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const FETCH_ROOMTYPENAME = "http://localhost:2026/project/fetchallroomtype";

export const NormalRoomPage = () => {

  const [roomDetails, setRoomDetails] = useState({
    seasonName: '',
    price: '',
    capacity: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchRoomDetails = async () => {
    try {
      const response = await axios.get(`${FETCH_ROOMTYPENAME}/Normal`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const loadRoomData = async () => {
      try {
        const data = await fetchRoomDetails();
        if (data && data.length > 0) {
          const room = data[0];
          setRoomDetails({
            seasonName: room.seasonName || 'Not specified',
            price: room.price || 'Not available',
            capacity: room.capacity || 'Not specified'
          });
         localStorage.setItem("roomPrice", room.price);

        }
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Failed to fetch room details');
        setLoading(false);
        console.error('Error fetching room data:', err);
      }
    };

    loadRoomData();
  }, []);

  const goToAvailability = () => {
  const roomTypeId = 4;  // clearly named
  localStorage.setItem("roomType", roomTypeId.toString());  // store as string
  navigate("/dates");
};

  if (loading) return (
    <div className="text-center py-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p>Loading room details...</p>
    </div>
  );

  if (error) return (
    <div className="text-center py-5 text-danger">
      <i className="bi bi-exclamation-triangle-fill me-2"></i>
      Error: {error}
    </div>
  );

  return (
    <div className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <button
        onClick={() => navigate(-1)}
        className='btn btn-secondary btn-sm'
        style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
      >
        ← Back
      </button>
      <Container>
        <Row className="mb-4">
          <Col md={6}>
            <img
              src="/images/suiteroom.png"
              alt="Suite Room"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "800px",
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />
          </Col>

          <Col md={6}>
            <h2 className="mb-3">Normal Room</h2>
            <p>
              Our Suite Room features a luxurious queen-sized bed, a private kitchenette,
              elegant bathroom, and a cozy living area. Designed for both comfort and style,
              it’s perfect for couples or solo travelers seeking premium accommodation.
            </p>
            <p>
              Enjoy complimentary light breakfast including coffee, tea, and freshly baked rolls with jam.
            </p>

            <Row className="mb-3">
              <Col>
                <i className="bi bi-water me-2"></i>Sea View
              </Col>
              <Col>
                <i className="bi bi-brightness-high me-2"></i>Morning Sunlight
              </Col>
            </Row>

            <h4 className="mt-4">🛏️ Bed Type</h4>
            <p>
              <i className="bi bi-bed me-2"></i>Ideal for {roomDetails.capacity} person(s)
            </p>

          <h2 className="mb-3">Normal Room Details</h2>
              <p><strong>Season:</strong> {roomDetails.seasonName}</p>
              <p><strong>Price:</strong> ₹{roomDetails.price}</p>
              <p><strong>Capacity:</strong> {roomDetails.capacity} persons</p>


            <h4 className="mt-4">🛎️ Room Amenities</h4>
            <Row>
              <Col md={6}>
                <p><i className="bi bi-shower me-2"></i>Shower</p>
                <p><i className="bi bi-safe me-2"></i>Safe</p>
                <p><i className="bi bi-clock me-2"></i>24/7 Room Service</p>
              </Col>
              <Col md={6}>
                <p><i className="bi bi-person-bounding-box me-2"></i>Concierge</p>
                <p><i className="bi bi-briefcase me-2"></i>Luggage Storage</p>
                <p><i className="bi bi-tv me-2"></i>Flat Screen TV</p>
              </Col>
            </Row>

            <h4 className="mt-4">📅 Cancellation Policy</h4>
            <ul>
              <li>✅ Free cancellation up to 2 days before arrival.</li>
              <li>🕒 50% refund if canceled 1 day before arrival.</li>
              <li>❌ No refund on the day of arrival.</li>
            </ul>

            <Button variant="danger" className="mt-3 px-4" onClick={goToAvailability}>
              Book Now
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
