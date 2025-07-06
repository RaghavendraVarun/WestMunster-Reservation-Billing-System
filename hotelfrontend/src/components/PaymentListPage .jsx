import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HotelService } from './HotelService/HotelService';

export const PaymentListPage = () => {
    const [payments, setPayments] = useState([]);
    const navigate = useNavigate();
       const listofPayments = async () => {
        try {
            const response = await HotelService.fetchallPayments();
            setPayments(response?.data);
        } catch (error) {
            console.error('Error fetching payments:', error);
        }
    };

    useEffect(() => {
        listofPayments();
    }, []);


    const addPayment = () => {
        navigate("/payment");
    };

  const glass = {
    background          : 'rgba(255,255,255,0.30)',
    backdropFilter      : 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border              : '1px solid rgba(255,255,255,0.18)',
  };

    return (
        <div>
            <div
      style={{
        position        : 'relative',
        minHeight       : '100vh',
        backgroundImage : 'url("/images/location.jpg")',
        backgroundSize  : 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
<button
        onClick={() => navigate(-1)}
        className='btn btn-secondary btn-sm'
        style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
      >
        ← Back
      </button>
                <div className='position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center'>
                     <div
          style={{
            ...glass,
            width     : '75%',
            padding   : 20,
            borderRadius: 10,
            maxHeight : '80vh',
            display   : 'flex',
            flexDirection: 'column',
            boxShadow : '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            overflow  : 'hidden',
          }}
        >
          {/* header row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 15,
              flexShrink: 0,
            }}
          >
                            <h2 style={{ color: "black", margin: 0 }}>Payment</h2>
                         
                        </div>

                         <div style={{ overflow: 'auto', flexGrow: 1, position: 'relative' }}>
            <table
              className="table table-bordered table-hover"
              style={{ ...glass, width: '100%', margin: 0 }}
            >
              <thead
                style={{
                  position: 'sticky',
                  top: 0,
                  zIndex: 2,
                }}
              >
                <tr>
                  {['S.No', 'Payment mode', 'Amount', 'Status', 'Bill Date Time', 'Reservation Id'].map(
                    (h, i) => (
                      <th
                        key={i}
                        style={{
                          ...glass,
                          backgroundColor: 'rgba(255,255,255,0.45) !important',
                          textAlign: 'center',
                          verticalAlign: 'middle',
                          width: i === 0 ? '10%' : i === 5 ? '20%' : 'auto',
                        }}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
                                    {/* <tr>
                                        <th style={{ width: '10%', textAlign: 'center' }}>S.No</th>
                                        <th style={{ textAlign: 'center' }}>Payment mode</th>
                                        <th style={{ textAlign: 'center' }}>Amount</th>
                                        <th style={{ textAlign: 'center' }}>Status</th>
                                        <th style={{ textAlign: 'center' }}>Bill Date Time</th>
                                        <th style={{ textAlign: 'center' }}>Reservation Id</th>
                                    </tr>
                                </thead> */}
                                <tbody>
                                    {payments.map((paymentitem, index) => (
                                        <tr key={paymentitem.paymentId || index}>
                                            <td style={{...glass, textAlign: 'center' }}>{index + 1}</td>
                                            <td style={{ ...glass,textAlign: 'center' }}>{paymentitem?.paymentMode}</td>
                                            <td style={{ ...glass,textAlign: 'center' }}>{paymentitem?.amount}</td>
                                            <td style={{ ...glass,textAlign: 'center' }}>{paymentitem?.status}</td>
                                            <td style={{ ...glass,textAlign: 'center' }}>{paymentitem?.billDateTime}</td>
                                            <td style={{ ...glass,textAlign: 'center' }}>{paymentitem?.reservationId}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}