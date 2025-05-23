import axios from "axios"

const CREATE_API='http://localhost:2026/project/createreservation'
const  CREATE_REG_API='http://localhost:2026/project/createUser'
const  LOGIN_API='http://localhost:2026/project/userLogin'
const  PAYMENT_API='http://localhost:2026/project/payment'
const  FEEDBACK_API='http://localhost:2026/project/save'





const createReservation=(reservation)=>{
    return axios.post(CREATE_API,reservation)
}
const loginUser=(login)=>{
    return axios.post(LOGIN_API,login)
}
const userPayment=(login)=>{
    return axios.post(PAYMENT_API,login)
}
const createRegister=(user)=>{
    return axios.post(CREATE_REG_API,user)
}
const createFeedback=(user)=>{
    return axios.post(FEEDBACK_API,user)
}
export const HotelService={
    createReservation,createRegister,loginUser,userPayment,createFeedback
}