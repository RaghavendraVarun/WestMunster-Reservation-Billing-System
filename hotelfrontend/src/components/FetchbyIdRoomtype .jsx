import { useParams, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { HotelService } from "./HotelService/HotelService";

export const FetchbyIdRoomtype = () => {
    const { roomById } = useParams();
    const location = useLocation();
    const [roomdata, setRoom] = useState([]);
    const [apiCalled, setApiCalled] = useState(false);

    useEffect(() => {
        // First check if we have data from navigation state
        if (location.state?.roomData) {
            setRoom([location.state.roomData]);
        } else if (roomById && !apiCalled) {
            // Only call API if we don't have data from state
            const fetchbyIdRoomType = async () => {
                try {
                    const response = await HotelService.fetchbyId(roomById);
                    setRoom(response?.data ? [response.data] : []);
                    setApiCalled(true);
                } catch (err) {
                    setRoom([]);
                    setApiCalled(true);
                } 
            };
            fetchbyIdRoomType();
        }
    }, [roomById, location.state, apiCalled]);

    return (
        <div>
            <img
                src="images/room.jpg"
                alt="Hotel Frame"
                className="img-fluid w-100 shadow-sm"
            />
            <button
        onClick={() => Navigate(-1)}
        className='btn btn-secondary btn-sm'
        style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
      >
        ← Back
      </button>
            <div className="position-absolute text-white translate-middle top-50 start-50 w-75">
                <h2 style={{ color: "black", backgroundColor: "white" }}>Room Type</h2>
                <div style={{ backgroundColor: "white", color: "black", width: "100%" }}>
                    <table border="1" cellPadding="10" cellSpacing="0" style={{ minWidth: "100%", width: "100%" }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Room Type Name</th>
                                <th>Total Rooms</th>
                                <th>No. Of People</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roomdata.length > 0 ? (
                                <tr>
                                    <td>{roomdata[0].roomTypeId}</td>
                                    <td>{roomdata[0].roomTypeName}</td>
                                    <td>{roomdata[0].totalRoom}</td>
                                    <td>{roomdata[0].capacity}</td>
                                </tr>
                            ) : (
                                <tr>
                                    <td colSpan="4">No room data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};