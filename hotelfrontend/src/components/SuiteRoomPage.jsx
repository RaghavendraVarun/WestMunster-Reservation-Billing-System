import { Row, Col, Container, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

export const SuiteRoomPage = () => {
    const navigate=useNavigate();

    const GoToRoomLocation = () => {
    navigate("/roomlocation")
  }
  return (
    <div className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row className="mb-4">
          <Col md={6}>
            <img
  src="/images/suiteroom.png"
  alt="Room"
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
            <h2 className="mb-3">Suite Room</h2>
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
              <i className="bi bi-bed me-2"></i>Queen Size Bed – spacious and comfortable for two people.
            </p>

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

            <Button variant="danger" className="mt-3 px-4" onClick={()=>GoToRoomLocation()}>Book Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
