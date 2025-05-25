import { Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const RoomPage = () => {
  const rooms = [
    {
      title: "Suite Room",
      image: "/images/suiteroom.png",
      features: [
        { text: "Garden Views", icon: "bi-eye" },
        { text: "35-40 sqm", icon: "bi-fullscreen" },
        { text: "RainShower and Bath", icon: "bi-droplet" },
        { text: "Top Floor", icon: "bi-arrow-up" },
        { text: "Queen Bed", icon: "bi-bed" },
      ],
      path: "/room/suite"
    },
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
    <div className="room-section" style={{
      minHeight: '100vh',
      backgroundImage: "url('/images/hotel.image2.jpeg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
    }}>
      <div className="p-5">
        <Row>
          {rooms.map((room, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card className="shadow" style={{ width: "100%" }}>
                <Card.Img variant="top" src={room.image} style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title className="fw-bold">{room.title}</Card.Title>
                  <ul className="list-unstyled">
                    {room.features.map((feature, i) => (
                      <li key={i}>
                        <i className={`bi ${feature.icon} me-2`}></i>{feature.text}
                      </li>
                    ))}
                  </ul>
                  <span className={`badge bg-${room.labelColor} mb-3`}>{room.label}</span>
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
  );
};
