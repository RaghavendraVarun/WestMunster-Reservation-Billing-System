import { useNavigate } from 'react-router-dom';
import './../App.css';
export const WelcomePage = () => {
  
  const navigate=useNavigate();

  const GoToReservationPage = () => {
    navigate("/reservation")
  }
  
  return (
    <div className='position-relative'> 
        <div className='w-1'>
            <img src="/images/Bellagio-Hotel-Casino-Las-Vegas.webp"  alt="Hotel Frame" className="img-fluid w-100 shadow-sm"/>
        </div>
        <div class='position-absolute text-white translate-middle top-50 start-50'>
             <h1 className='display-3 fw-bold'> WELCOME TO <br></br>WEST MUNSTER HOTEL</h1>
             <button className="btn mt-3 btn-lg fw-bold" style={{ backgroundColor: "#B87300" }} onClick={()=>GoToReservationPage()}>RESERVE A ROOM</button>
        </div>
    </div>
  )
}
