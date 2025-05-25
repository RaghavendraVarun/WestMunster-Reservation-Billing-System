import { useNavigate } from 'react-router-dom';

export const CustomerHomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: "url('/images/hotel.image2.jpeg')", // Change if needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div className="container bg-white bg-opacity-75 rounded p-4 shadow" style={{ width: '100%', maxWidth: '1024px' }}>
        <h1 className="mb-4 text-center">CUSTOMER HOME</h1>

        <div className="d-flex flex-column gap-3">
          <button className="btn btn-success" onClick={() => navigate('/reservation')}>
            New Reservation
          </button>
          <button className="btn btn-warning" onClick={() => navigate('/reservation')}>
            My Current Reservation
          </button>
          <button className="btn btn-info" onClick={() => navigate('/reservation')}>
            My Hotel History
          </button>
        </div>
      </div>
    </div>
  );
};
