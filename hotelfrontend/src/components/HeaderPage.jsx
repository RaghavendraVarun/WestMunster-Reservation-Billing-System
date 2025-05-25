import { useNavigate,Link} from 'react-router-dom'

export const HeaderPage = () => {
   
  const navigate=useNavigate();
  const GoToLoginPage = () => {
    navigate("/login")
  }

  const GoToRegisterPage = () => {
    navigate("/register")
  }
   
  return ( 
    <div>
        <div className="border rounded">
            <div className="d-flex align-items-center p-2" style={{ backgroundColor: "#E6D0B2" }}>
                <Link to='/'><img src="/images/logo.hotel.png" alt="Hostel Icon" className="me-4"/></Link>
                <h1 className="fst-italic fw-medium mr-2 fs-4">WEST MUNSTER HOTEL</h1>
                <div className='ms-auto'>
                    <Link to="/" className="text-black text-decoration-none fw-bold px-3 py-2 me-2">HOME</Link>
                    <Link to="/login" className="text-black text-decoration-none fw-bold px-3 py-2 me-2">SERVICES</Link>
                    <Link to="/rooms" className="text-black text-decoration-none fw-bold px-3 py-2 me-2">ROOMS</Link>
                </div>
                <div className='ms-auto'>
                    <button className='btn text-white fw-bold text-uppercase px-3 py-2 rounded me-2 link-light link-opacity-75-hover' style={{ backgroundColor: '#9C6200' }} onClick={()=>GoToLoginPage()}>Login</button>
                    <button className='btn text-white fw-bold text-uppercase px-3 py-2 rounded me-2 link-light link-opacity-75-hover' style={{ backgroundColor: '#9C6200' }} onClick={()=>GoToRegisterPage()}>Register</button>
                </div>
            </div>
        </div>
    </div>
  )
}
