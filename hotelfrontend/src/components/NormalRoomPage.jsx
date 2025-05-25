import { Row, Col, Container, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

export const NormalRoomPage = () => {
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
              src="/images/normalroom.png"
              alt="Normal Room"
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
            <h2 className="mb-3">Normal Room</h2>
            <p>
              Perfect for short stays, the Normal Room includes essential amenities, comfortable bed, and garden view. A great value for solo travelers or budget-conscious guests.
            </p>
            <p>
              Includes complimentary morning tea and access to lounge area.
            </p>
            <Row className="mb-3">
              <Col>
                <i className="bi bi-tree me-2"></i>Garden View
              </Col>
              <Col>
                <i className="bi bi-layers me-2"></i>Mid Floor
              </Col>
            </Row>

            <h4 className="mt-4">🛏️ Bed Type</h4>
            <p>
              <i className="bi bi-bed me-2"></i>Queen Bed with reading light and nightstand.
            </p>

            <h4 className="mt-4">🛎️ Room Amenities</h4>
            <Row>
              <Col md={6}>
                <p><i className="bi bi-shower me-2"></i>Private Bathroom</p>
                <p><i className="bi bi-lock me-2"></i>Safe</p>
                <p><i className="bi bi-clock me-2"></i>Room Service</p>
              </Col>
              <Col md={6}>
                <p><i className="bi bi-luggage me-2"></i>Luggage Area</p>
                <p><i className="bi bi-wifi me-2"></i>Wi-Fi</p>
                <p><i className="bi bi-tv me-2"></i>TV</p>
              </Col>
            </Row>

            <h4 className="mt-4">📅 Cancellation Policy</h4>
            <ul>
              <li>✅ Free cancellation up to 1 day before arrival.</li>
              <li>❌ No refund on the same day of arrival.</li>
            </ul>

            <Button variant="danger" className="mt-3 px-4" onClick={()=>GoToRoomLocation()}>Book Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
