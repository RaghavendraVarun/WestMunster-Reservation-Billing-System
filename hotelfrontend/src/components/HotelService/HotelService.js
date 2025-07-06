import axios from "axios"

// const CREATE_API='http://localhost:2026/project/createreservation'
// const  CREATE_REG_API='http://localhost:2026/project/createUser'
// const  LOGIN_API='http://localhost:2026/project/userLogin'

const ROOMTYPE_FETCHALL='http://localhost:2026/project/fetchall'
const CREATE_ROOM= 'http://localhost:2026/project/createRoomType'
const FETCHBY_ID='http://localhost:2026/project/fetchbyId'
const UPDATE_API='http://localhost:2026/project/roomTypeUpdate'
const FETCHALL_ROOM_LOCATION='http://localhost:2026/project/getFetchAllroomlsu'
//roomsetup
const CREATE_ROOM_LOCATION='http://localhost:2026/project/createroomlocation'
const FETCHLOCATIONBY_ID='http://localhost:2026/project/fetchIdrlsu'
const UPDATELOCATION_API = 'http://localhost:2026/project/updateRoomLocation'
const ROOM_TYPE_DROPDOWN="http://localhost:2026/project/roomTypeDropDown"
const FETCHALLROOMNO='http://localhost:2026/project/fetchroomnumbers'
const UPDATE_ROOMNO='http://localhost:2026/project/updateAllocation'
const FETCHROOMNOBY_ID='http://localhost:2026/project/fetchbyIdrlsu'
const SEASON_CREATE="http://localhost:2026/project/createSeason"
const SEASON_BY_ID='http://localhost:2026/project/fetchIdSeason'
const SEASON_FETCHALL="http://localhost:2026/project/getFetchAllSeasons"
const UPDATE_SEASON='http://localhost:2026/project/seasonupdateId'
const  FEEDBACK_API='http://localhost:2026/project/saveFeedback'
const  FETCHALL_FEEDBACK_API='http://localhost:2026/project/getFetchAllFeedback'
const CREATE_API='http://localhost:2026/project/createReservation'
const  CREATE_REG_API='http://localhost:2026/project/createUser'
const FETCHALL_USER_API="http://localhost:2026/project/getFetchAllUser"
const UPDATE_USER_API="http://localhost:2026/project/updateUser"
const  LOGIN_API='http://localhost:2026/project/userLogin'
const FETCH_USER_API="http://localhost:2026/project/fetchIdUser"
const FETCH_ROOMTYPENAME="http://localhost:2026/project/fetchallroomtype"

const  PAYMENT_API='http://localhost:2026/project/payment'

const  FETCHALL_PAYMENT_API='http://localhost:2026/project/getFetchAllPayment'
const  FETCHALL_RESERVATION_API='http://localhost:2026/project/reservationdetailsfetchall'
const  UPDATE_RESERVATION_API='http://localhost:2026/project/updateReservation'

const FETCH_FREEROOMS_API="http://localhost:2026/project/free-rooms"
const FETCH_FREEROOMTYPE_API="http://localhost:2026/project/free-roomtype"
const FETCH_RESERVATION_API="http://localhost:2026/project/reservations"

const FETCH_RESERVATION_USER_API="http://localhost:2026/project/reservations/user"


const reservationlistbyuserId=(reservationId)=>{
    return axios.get(FETCH_RESERVATION_USER_API+'/'+reservationId)
}
const createFeedback=(user)=>{
    return axios.post(FEEDBACK_API,user)
}


const fetchallFeedbacks=()=>{
    return axios.get(FETCHALL_FEEDBACK_API)
}

const createReservation=(reservation)=>{
    return axios.post(CREATE_API,reservation)
}
const reservationlist=()=>{
    return axios.get(FETCHALL_RESERVATION_API)
}
const updateReservation=(reservation)=>{
    return axios.post(UPDATE_RESERVATION_API,reservation)
}

const loginUser=(login)=>{
    return axios.post(LOGIN_API,login)
}
const fetchallPayments=()=>{
    return axios.get(FETCHALL_PAYMENT_API)
}
const fetchByRoomTypeName=(roomTypeName)=>{
    return axios.get(`${FETCH_ROOMTYPENAME}/${roomTypeName}`)
}

const userPayment=(payment)=>{
    return axios.post(PAYMENT_API,payment)
}
// const createRegister=(user)=>{
//     return axios.post(CREATE_REG_API,user)
// }

const fetchallRoomtype = () =>{
    return axios.get(ROOMTYPE_FETCHALL)
}
const createRoom =(formData)=>{
    return axios.post(CREATE_ROOM,formData)

}
const fetchbyId =(id)=>{
    return axios.get(`${FETCHBY_ID}/${id}`)
}

const fetchlocationbyId =(id)=>{
    return axios.get(`${FETCHLOCATIONBY_ID}/${id}`)
}

const updateLocation = (id, formData) => {
    return axios.put(`${UPDATELOCATION_API}/${id}`, formData); // ✅ now this works
};


const updateRoom=(id,formData)=>{
    return axios.put(`${UPDATE_API}/${id}`,formData)
}
const listofRoomLocation=()=>{
    
    return axios.get(FETCHALL_ROOM_LOCATION);
}

const createRoomLocation=(roomlocation)=>{
    return axios.post(CREATE_ROOM_LOCATION,roomlocation)
}

const fetchAllRoomTypes=()=>{
    return axios.get(ROOM_TYPE_DROPDOWN)
}

const reservationuserlist=(userid)=>{
    return axios.get(FETCHALL_RESERVATION_API+'/'+userid)
}

const fetchallRoomnoAllocation=()=>{
    return axios.get(FETCHALLROOMNO)
}

const getroomnoAllocationById=(id)=>{
    return axios.get(`${FETCHROOMNOBY_ID}/${id}`)
}

const updateroomnoAllocation=(roomData)=>{
     return axios.put(UPDATE_ROOMNO,roomData)
}

const createSeason=(season)=>{
    return axios.post(SEASON_CREATE,season)
}
const seasonbyId =(id)=>{
    return axios.get(`${SEASON_BY_ID}/${id}`)
}

const listofSeason=()=>{
    return axios.get(SEASON_FETCHALL)
}
const updateseason=(id,formData)=>{
    return axios.put(`${UPDATE_SEASON}/${id}`,formData)
}

const createRegister=(user)=>{
    return axios.post(CREATE_REG_API,user)
}
const fetchallUsers=()=>{
    return axios.get(FETCHALL_USER_API)
}
const fetchUser=(userid)=>{
    return axios.get(FETCH_USER_API+'/'+userid)
}

const updateRegister=(user,userid)=>{
    return axios.put(UPDATE_USER_API+'/'+userid,user)
}

const fetchallFreeRooms = (checkInDate, checkOutDate) => {
  return axios.post(FETCH_FREEROOMS_API, {
    checkInDate,
    checkOutDate
  }, {
    headers: { 'Content-Type': 'application/json' }
  });
};
const fetchFreeRoomsByRoomType = (checkInDate, checkOutDate, roomTypeId,floorNumber) => {
  return axios.post(`${FETCH_FREEROOMTYPE_API}`, {
    checkInDate,
    checkOutDate,
    roomTypeId,
    floorNumber,
  }, {
    headers: { 'Content-Type': 'application/json' }
  });
}

const reservationlistbyId=(reservationId)=>{
    return axios.get(FETCH_RESERVATION_API+'/'+reservationId)
}

export const HotelService={
    createReservation,createRegister,loginUser,userPayment,fetchallRoomtype,createRoom,fetchbyId,updateRoom,createFeedback,fetchallFeedbacks,fetchallPayments,
    getroomnoAllocationById,updateroomnoAllocation,fetchallRoomnoAllocation,listofRoomLocation,fetchlocationbyId,updateLocation,fetchAllRoomTypes,createRoomLocation,createSeason,seasonbyId,updateseason,listofSeason,
    fetchallUsers,fetchUser,updateRegister,fetchByRoomTypeName,reservationlistbyId,updateReservation,reservationlist,fetchallFreeRooms,fetchFreeRoomsByRoomType,reservationuserlist,reservationlistbyuserId
}