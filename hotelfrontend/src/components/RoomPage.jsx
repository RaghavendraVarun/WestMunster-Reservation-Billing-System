import { Col, Row, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const RoomPage = () => {
  const navigate = useNavigate();

  const rooms = [
    {
      title: "Deluxe Room",
      image: "/images/deluxeroom.png",
      features: [
        { text: "Poolside Views", icon: "bi-eye" },
        { text: "30-35 sqm", icon: "bi-fullscreen" },
        { text: "RainShower and Bath", icon: "bi-droplet" },
        { text: "1st Floor", icon: "bi-building" },
        { text: "Queen Bed", icon: "bi-bed" },
      ],
      path: "/room/deluxe"
    },
    {
      title: "Super Deluxe Room",
      image: "/images/suiteroom.png",
      features: [
        { text: "Garden Views", icon: "bi-eye" },
        { text: "35-40 sqm", icon: "bi-fullscreen" },
        { text: "RainShower and Bath", icon: "bi-droplet" },
        { text: "Top Floor", icon: "bi-arrow-up" },
        { text: "Queen Bed", icon: "bi-bed" },
      ],
      path: "/room/superdeluxe"
    },
    {
      title: "Double Room",
      image: "/images/doubleroom.png",
      features: [
        { text: "Garden Views", icon: "bi-eye" },
        { text: "30-35 sqm", icon: "bi-fullscreen" },
        { text: "RainShower and Bath", icon: "bi-droplet" },
        { text: "Top Floor", icon: "bi-arrow-up" },
        { text: "Queen Bed", icon: "bi-bed" },
      ],
      path: "/room/double"
    },
    {
      title: "Normal Room",
      image: "/images/normalroom.png",
      features: [
        { text: "Garden Views", icon: "bi-eye" },
        { text: "30-35 sqm", icon: "bi-fullscreen" },
        { text: "RainShower and Bath", icon: "bi-droplet" },
        { text: "Mid Floor", icon: "bi-layers" },
        { text: "Queen Bed", icon: "bi-bed" },
      ],
      path: "/room/normal"
    },
  ];

  return (
    <div style={{paddingTop:'3rem'}}>
      <button
          onClick={() => navigate(-1)}
          className="btn btn-secondary btn-sm"
          style={{ position: 'absolute', top: '80px', left: '1rem', zIndex: 10 }}
        >
          ← Back
        </button>
      <div
        className="room-section"
        style={{
          minHeight: '80vh',
          backgroundImage: "url('/images/hotel.image2.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '2rem',
          paddingTop: '4rem',
          position: 'relative'
        }}
      >
        

        <div className="p-3">
          <Row className="flex-nowrap overflow-auto">
            {rooms.map((room, index) => (
              <Col key={index} md={3} sm={6} xs={12} className="mb-4">
                <Card className="shadow" style={{ width: "100%"}}>
                  <Card.Img
                    variant="top"
                    src={room.image}
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">{room.title}</Card.Title>
                    <ul className="list-unstyled">
                      {room.features.map((feature, i) => (
                        <li key={i}>
                          <i className={`bi ${feature.icon} me-2`}></i>
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                    <div>
                      <Link to={room.path}>
                        <Button variant="danger">More details</Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};
