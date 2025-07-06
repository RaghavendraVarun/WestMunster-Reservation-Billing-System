import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate, Link, useLocation } from 'react-router-dom';

export const HeaderPage = () => {
  const [roleofuser, setRoleofuser] = useState(() => localStorage.getItem("roleofuser"));
  const navigate = useNavigate();
  const location = useLocation();

  const GoToLoginPage = () => navigate("/login");
  const GoToRegisterPage = () => navigate("/register");
  const Logout = () => {
    setRoleofuser(null);
    localStorage.removeItem("roleofuser");
    navigate("/");
  };

  const isWelcome = location.pathname === "/";
  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";
  const isCustomer = location.pathname === "/customer";
  const isAdmin = location.pathname === "/admin";

  const hideMenu = isWelcome || isLogin || isRegister || isAdmin && isCustomer;

  useEffect(() => {
    if (location.pathname.startsWith("/admin")) {
      setRoleofuser("admin");
      localStorage.setItem("roleofuser", "admin");
    } else if (location.pathname.startsWith("/customer")) {
      setRoleofuser("customer");
      localStorage.setItem("roleofuser", "customer");
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="border rounded shadow-sm">
        <div
          className="d-flex align-items-center justify-content-between py-1 px-3"
          style={{
            background: 'linear-gradient(to right, #C69C6D, #A67C00)',  // Warm gold gradient
            fontFamily: 'Georgia, serif',
            fontVariant: 'small-caps',
            minHeight: '40px',
         
          }}
          
        >
          <div className="d-flex align-items-center">
            <Link to='/'>
              <img
                src="/images/logo.hotel.png"
                alt="Hostel Icon"
                className="me-2"
                style={{ height: '50px' }}
              />
            </Link>
            <h1 className="fst-italic fw-medium fs-5 mb-0" style={{ color: '#fff' }}>
              WEST MUNSTER HOTEL
            </h1>
          </div>

          {!hideMenu ? (
            <div className="d-flex align-items-center gap-3">
              {roleofuser === "admin" ? (
                <>
                  <Link to="/admin" className="text-white text-decoration-none fw-bold">HOME</Link>
                  <Dropdown  >
      <Dropdown.Toggle  style={{
            background: 'linear-gradient(to right, #C69C6D, #A67C00)'}} >
        ROOM SETUP
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/roomTypeFetchall">
          ROOM-TYPE
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/roomLocationSetup">
          ROOM-LOCATION-SETUP
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/fetchall">
          ROOM-ALLOCATION
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                  <Link to="/seasonList" className="text-white text-decoration-none fw-bold">SEASON</Link>
                  <Link to="/listfeedback" className="text-white text-decoration-none fw-bold">FEEDBACK</Link>
                  <Link to="/paymentlist" className="text-white text-decoration-none fw-bold">PAYMENT</Link>
                 <Link to="/reservationlist" className="text-white text-decoration-none fw-bold px-3 py-2 me-2">RESERVATION HISTORY</Link>

                </>
              ) : (
                <>
                  <Link to="/customer" className="text-white text-decoration-none fw-bold px-3 py-2 me-2">HOME</Link>
                  <Link to="/about" className="text-white text-decoration-none fw-bold px-3 py-2 me-2">ABOUT</Link>
                  <Link to="/rooms" className="text-white text-decoration-none fw-bold px-3 py-2 me-2">ROOMS</Link>
                  <Link to="/feedback" className="text-white text-decoration-none fw-bold px-3 py-2 me-2">FEEDBACK</Link>
                  <Link to="/reservationuserlist" className="text-white text-decoration-none fw-bold px-3 py-2 me-2">RESERVATIONS</Link>

                </>
              )}
<button
  className="btn text-white fw-semibold text-uppercase px-3 py-1 shadow-sm rounded"
  style={{
    backgroundColor: '#f28b82', // light red
    border: 'none',
    fontSize: '0.85rem',
    letterSpacing: '0.5px',
  }}
  onClick={Logout}
>
  Logout
</button>


            </div>
          ) : (
            <div className="d-flex align-items-center gap-2">
              <button
                className='btn text-white fw-bold text-uppercase px-2 py-1'
                style={{ backgroundColor: '#f28b82' }}
                onClick={GoToLoginPage}
              >
                Login
              </button>
              <button
                className='btn text-white fw-bold text-uppercase px-2 py-1'
                style={{ backgroundColor: '#f28b82' }}
                onClick={GoToRegisterPage}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};