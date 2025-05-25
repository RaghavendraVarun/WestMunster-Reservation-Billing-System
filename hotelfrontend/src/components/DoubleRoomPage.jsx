import { Row, Col, Container, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

export const DoubleRoomPage = () => {
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
              src="/images/doubleroom.png"
              alt="Double Room"
              className="img-fluid rounded"
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
            <h2 className="mb-3">Double Room</h2>
            <p>
              Our Double Room provides a cozy and peaceful setting with garden views. Ideal for friends or small families wanting comfort and accessibility.
            </p>
            <p>
              Complimentary breakfast and quick access to common areas included.
            </p>
            <Row className="mb-3">
              <Col>
                <i className="bi bi-tree me-2"></i>Garden View
              </Col>
              <Col>
                <i className="bi bi-arrow-up me-2"></i>Top Floor Location
              </Col>
            </Row>

            <h4 className="mt-4">🛏️ Bed Type</h4>
            <p>
              <i className="bi bi-bed me-2"></i>Queen Size Bed with dual side tables.
            </p>

            <h4 className="mt-4">🛎️ Room Amenities</h4>
            <Row>
              <Col md={6}>
                <p><i className="bi bi-shower me-2"></i>Modern Shower</p>
                <p><i className="bi bi-lock me-2"></i>Digital Safe</p>
                <p><i className="bi bi-clock me-2"></i>All-day Room Service</p>
              </Col>
              <Col md={6}>
                <p><i className="bi bi-house-door me-2"></i>Top Floor</p>
                <p><i className="bi bi-wifi me-2"></i>Wi-Fi Access</p>
                <p><i className="bi bi-tv me-2"></i>TV</p>
              </Col>
            </Row>

            <h4 className="mt-4">📅 Cancellation Policy</h4>
            <ul>
              <li>✅ Cancel 48 hours before check-in for full refund.</li>
              <li>❌ No refund within 24 hours of arrival.</li>
            </ul>

            <Button variant="danger" className="mt-3 px-4" onClick={()=>GoToRoomLocation()}>Book Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
