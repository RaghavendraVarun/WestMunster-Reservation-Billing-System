// import { Navigate } from 'react-router-dom';
import './../App.css';
export const WelcomePage = () => {


    return (
        <div className='position-relative'>
           <div
      style={{
        minHeight: '76vh',
        backgroundImage: "url('images/Admin.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '2rem',
        position: 'relative',
      }}
    >
        
            {/* <button
        onClick={() => Navigate(-1)}
        className='btn btn-secondary btn-sm'
        style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
      >
        ← Back
      </button> */}
            <div className='position-absolute text-white translate-middle top-50 start-50'>
                <h2 className='fw-bold' style={{ textDecoration: 'underline', color:"red"  }}>WELCOME TO</h2>
                <h1 className='fw-bold' style={{ fontfamily: 'Georgia,serif', textSize: "48px", color:"dark red" }}>WEST MUNSTER HOTEL</h1>
            </div>
        </div>
        </div>
    )
}