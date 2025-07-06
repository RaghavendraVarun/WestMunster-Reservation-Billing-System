import { useNavigate } from 'react-router-dom';
import './../App.css';
export const HomePage = () => {
  
  const navigate=useNavigate();

  const GoToReservationPage = () => {
    navigate("/dates")
  }
  
  return (
    <div className='position-relative'> 
        <div className='w-1'>
            <img src="/images/Bellagio-Hotel-Casino-Las-Vegas.webp"  alt="Hotel Frame" className="img-fluid w-100 shadow-sm"/>
        </div>
        <button
        onClick={() => navigate(-1)}
        className='btn btn-secondary btn-sm'
        style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
      >
        ← Back
      </button>
        <div class='position-absolute text-white translate-middle top-50 start-50'>
             <h1 className='display-3 fw-bold'> WELCOME TO <br></br>WEST MUNSTER HOTEL</h1>
             <button className="btn mt-3 btn-lg fw-bold" style={{ backgroundColor: "#B87300" }} onClick={()=>GoToReservationPage()}>RESERVE A ROOM</button>
        </div>
    </div>
  )
}
