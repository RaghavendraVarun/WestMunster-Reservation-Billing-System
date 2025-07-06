import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HotelService } from '../HotelService/HotelService';

const Seasonlist = () => {
    const [seasons, setSeason] = useState([]);
    const navigate = useNavigate();

    const listofSeason = async () => {
        try {
            const response = await HotelService.listofSeason();
            setSeason(response?.data);
        } catch (error) {
            console.error('Error fetching room location:', error);
        }
    };

    useEffect(() => {
        listofSeason();
    }, []);

    const addSeason = () => {
        navigate("/addseason");
    };

    const handleUpdate = (seasonId) => {
        navigate(`/updateseason/${seasonId}`, { state: { formData: seasonId } });
    };


    const formatDate = (dateString) => {
        if (!dateString) return '';
        return dateString.substring(0, 10); 
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
                            <h2 style={{ color: "black", margin: 0 }}>Season</h2>
                            <button className='btn btn-primary' onClick={addSeason}>
                                + Add Season
                            </button>
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
                  {['S.No', ,'Room Type','Season Name', 'Price', 'Start Date', 'End Date', 'Action'].map(
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
                                        <th style={{ textAlign: 'center' }}>Season Name</th>
                                        <th style={{ textAlign: 'center' }}>Price</th>
                                        <th style={{ textAlign: 'center' }}>Start Date</th>
                                        <th style={{ textAlign: 'center' }}>End Date</th>
                                        <th style={{ width: '20%', textAlign: 'center' }}>Action</th>
                                    </tr>
                                </thead> */}
                                <tbody>
                                    {seasons.map((season, index) => (
                                        <tr key={season.seasonId}>
                                            <td style={{...glass, textAlign: 'center' }}>{index + 1}</td>
                                            <td style={{...glass, textAlign: 'center' }}>{season?.roomTypeId}</td>
                                            <td style={{...glass, textAlign: 'center' }}>{season?.seasonName}</td>
                                            <td style={{ ...glass,textAlign: 'center' }}>{season?.price}</td>
                                            <td style={{ ...glass,textAlign: 'center' }}>{formatDate(season?.startDate)}</td>
                                            <td style={{...glass, textAlign: 'center' }}>{formatDate(season?.endDate)}</td>
                                            <td style={{...glass, textAlign: 'center' }}>
                                                <button
                                                    className='btn btn-secondary btn-sm'
                                                    onClick={() => handleUpdate(season?.seasonId)}
                                                >Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Seasonlist;