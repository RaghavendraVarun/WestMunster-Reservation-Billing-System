import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate } from 'react-router-dom';

export const About = () => {
  return (
    <div style={{paddingTop:'3rem'}}>
    <Container className="mt-5 mb-5">
          <button
        onClick={() => Navigate(-1)}
        className='btn btn-secondary btn-sm'
        style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10,top:"90px" }}
      >
        ← Back
      </button>
      <Card className="shadow border-0 p-4" style={{ backgroundColor: '#f4f9ff' }}>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <Image
              src="/images/Bellagio-Hotel-Casino-Las-Vegas.webp"
              alt="Hotel Interior"
              fluid
              rounded
            />
          </Col>
          <Col md={6}>
            <h2 className="mb-4" style={{ color: '#003366' }}>Welcome to Westmunster Hotel</h2>
            <p style={{ fontSize: '1.1rem', color: '#444' }}>
              Westmunster Hotel is a premier destination offering luxurious rooms, exceptional
              service, and unforgettable experiences. Whether you're traveling for business or leisure,
              our mission is to provide comfort and elegance that make your stay truly memorable.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#444' }}>
              Nestled in the heart of the city, our hotel blends modern sophistication with timeless
              charm. We pride ourselves on hospitality, innovation, and an unwavering attention to detail.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#444' }}>
              Join us and experience the warmth of Westmunster—where luxury meets comfort.
            </p>
          </Col>
        </Row>
      </Card>
    </Container>
    </div>
  );
};