import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { HotelService } from "./HotelService/HotelService";  // <-- import your service

export const LoginPage = () => {
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const [errMsgs, setErrMsgs] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("console is triggered")
    // Optional: You can add validation before calling API

    try {
       console.log("Calling HotelService.loginUser with:", loginDetails); 
      const response = await HotelService.loginUser(loginDetails);
      console.log("user details response:", response);
      console.log("user details data:", response.data);

      if (response.data) {
        await Swal.fire({
          icon: 'success',
          title: 'Logged in successfully!',
          showConfirmButton: false,
          timer: 1500
        });

        localStorage.setItem("userId", response.data.userId ?? '');
        localStorage.setItem("userName", response.data.userName ?? '');
        localStorage.setItem("roleId", response.data.roleId ?? '');

        if (response.data.roleId === 1) {
          navigate("/admin");
        } 
        else if (response.data.roleId === 2){
          navigate("/customer");
        }
        else if (response.data.roleId) {
          navigate("/availability");
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login failed',
            text: 'Unexpected response. Please try again later.',
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login failed',
          text: 'No data returned from server.',
        });
      }
    } catch (error) {
      console.error("Login failed:", error);
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Something went wrong. Please try again.',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedLoginData = { ...loginDetails, [name]: value };
    const updateErrors = { ...errMsgs };

    if (name === 'email') {
      updateErrors.email = value === "" ? "" :
        !/^[a-zA-Z0-9._%+-]+@[0-9a-z]+\.[a-z]{2,4}$/.test(value)
          ? "Enter valid email address" : "";
    }

    if (name === 'password') {
      updateErrors.password = value === "" ? "" :
        value.length < 8
          ? "Password must be at least 8 characters" : "";
    }

    setLoginDetails(updatedLoginData);
    setErrMsgs(updateErrors);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
       <button
                onClick={() => navigate(-1)}
                className='btn btn-secondary btn-sm'
                style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
            >
                ← Back
            </button>
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(10, 20, 47, 0.7)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'relative',
          backgroundColor: 'white',
          borderRadius: '15px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
          padding: '3rem 2.5rem',
          width: '400px',
          maxWidth: '100%',
          zIndex: 1,
          textAlign:'left'
        }}
        
      >
        
        <h2 className="text-center mb-4" style={{ 
          fontWeight: '700', color: '#0A142F' 
          }}>
          Login
        </h2>
        <Form onSubmit={handleLogin} style={{ backdropFilter: 'blur(5px)'
}}>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: '600' }}>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginDetails.email}
              onChange={handleChange}
              required
              style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
            />
            {errMsgs.email && <div className="text-danger mt-1">{errMsgs.email}</div>}
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={{ fontWeight: '600' }}>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={loginDetails.password}
              onChange={handleChange}
              required
              style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
            />
            {errMsgs.password && <div className="text-danger mt-1">{errMsgs.password}</div>}
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            style={{ fontWeight: '600', fontSize: '1.1rem', padding: '0.6rem' }}
            disabled={errMsgs.email !== "" || errMsgs.password !== ""}
          >
            Login now
          </Button>

          <div className="text-center mt-3" style={{ fontSize: '0.9rem' }}>
            <span>Don't have an account? </span>
            <Link to="/signup" className="text-primary fw-bold" style={{ textDecoration: 'none' }}>
              Sign up
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};
