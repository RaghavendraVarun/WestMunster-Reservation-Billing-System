import { Row, Col, Container, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

export const DeluxeRoomPage = () => {
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
              src="/images/deluxeroom.png"
              alt="Deluxe Room"
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
            <h2 className="mb-3">Deluxe Room</h2>
            <p>
              Our Deluxe Room offers poolside views, a queen bed, and ample space for comfort. Ideal for guests seeking tranquility and relaxation with stylish furnishings.
            </p>
            <p>
              Enjoy complimentary continental breakfast and morning tea service.
            </p>
            <Row className="mb-3">
              <Col>
                <i className="bi bi-water me-2"></i>Pool View
              </Col>
              <Col>
                <i className="bi bi-sunrise me-2"></i>Morning Light
              </Col>
            </Row>

            <h4 className="mt-4">🛏️ Bed Type</h4>
            <p>
              <i className="bi bi-bed me-2"></i>Queen Size Bed with plush bedding.
            </p>

            <h4 className="mt-4">🛎️ Room Amenities</h4>
            <Row>
              <Col md={6}>
                <p><i className="bi bi-shower me-2"></i>Rain Shower</p>
                <p><i className="bi bi-safe me-2"></i>Safe Box</p>
                <p><i className="bi bi-clock me-2"></i>Room Service</p>
              </Col>
              <Col md={6}>
                <p><i className="bi bi-building me-2"></i>Located on 1st Floor</p>
                <p><i className="bi bi-wifi me-2"></i>Free Wi-Fi</p>
                <p><i className="bi bi-tv me-2"></i>LED TV</p>
              </Col>
            </Row>

            <h4 className="mt-4">📅 Cancellation Policy</h4>
            <ul>
              <li>✅ Cancel up to 24 hours in advance for full refund.</li>
              <li>🕒 50% refund if canceled same day before 12 PM.</li>
              <li>❌ No refund after check-in time.</li>
            </ul>

            <Button variant="danger" className="mt-3 px-4" onClick={()=>GoToRoomLocation()}>Book Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
