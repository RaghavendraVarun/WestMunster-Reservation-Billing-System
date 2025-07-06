
// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link, useParams } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { HotelService } from './HotelService/HotelService';

// export const RegisterPage = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     userName: '', email: '', password: '', contactNumber: '',
//     dob: '', permanentAddress: '', temporaryAddress: '',
//     pinCode: '', city: '', roleId: 2,
//   });
//   const [errMsgs, setErrMsgs] = useState({});
//     const { userId } =useParams();


//   const handleChange = ({ target: { name, value } }) => {
//     // const { name, value } = target;
//     setUser(prev => ({ ...prev, [name]: value }));
//     setErrMsgs(prev => ({ ...prev, [name]: '' }));
//   };
// const validate = () => {
//   const e = {};


//   // Username validation
//   if (!user.userName.trim()) {
//     e.userName = 'Username is required';
//   } else if (!/^[A-Za-z ]+$/.test(user.userName.trim())) {
//     e.userName = 'Only letters allowed';
//   } else if (user.userName.length > 45) {
//     e.userName = 'Max 45 characters';
//   }

//   // Email validation
//   if (!user.email.trim()) {
//     e.email = 'Email is required';
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email.trim())) {
//     e.email = 'Invalid email';
//   }

//   // Password validation
//   if (!user.password.trim()) {
//     e.password = 'Password is required';
//   } else if (user.password.length < 8) {
//     e.password = 'Min 8 characters';
//   }

//   // Contact Number validation
//   if (!user.contactNumber.trim()) {
//     e.contactNumber = 'Contact is required';
//   } else if (!/^\d{10}$/.test(user.contactNumber.trim())) {
//     e.contactNumber = 'Must be 10 digits';
//   }

//   // Date of Birth validation
//   if (!user.dob.trim()) {
//     e.dob = 'Date of birth is required';
//   }

//   // Permanent Address validation
//   if (!user.permanentAddress.trim()) {
//     e.permanentAddress = 'Permanent address is required';
//   } else if (user.permanentAddress.length > 225) {
//     e.permanentAddress = 'Max 225 characters';
//   }

//   // Temporary Address validation
//   if (!user.temporaryAddress.trim()) {
//     e.temporaryAddress = 'Temporary address is required';
//   } else if (user.temporaryAddress.length > 225) {
//     e.temporaryAddress = 'Max 225 characters';
//   }

//   // Pincode validation
//   if (!user.pinCode.trim()) {
//     e.pinCode = 'PinCode is required';
//   } else if (!/^\d{6}$/.test(user.pinCode.trim())) {
//     e.pinCode = 'Must be 6 digits';
//   }

//   // City validation (updated for only letters and spaces)
//   if (!user.city.trim()) {
//     e.city = 'City is required';
//   } else if (!/^[A-Za-z\s]+$/.test(user.city.trim())) {
//     e.city = 'City must contain only letters';
//   } else if (user.city.length > 45) {
//     e.city = 'Max 45 characters';
//   }

//   return e;
// };

  
//   useEffect(() => {
//     fetchDetails(userId);
//   }, [userId]);

//   const fetchDetails = async (userId) => {
//     if (userId) {
//       try {
//         const response = await HotelService.fetchUser(userId);
//         // setUser({
//         //   userName: response.data.userName,
//         //   email: response.data.email,
//         //   contactNumber: response.data.contactNumber,
//         //   dob: response.data.dob,
//         //   permanentAddress: response.data.permanentAddress,
//         //   temporaryAddress: response.data.temporaryAddress,
//         //   pinCode: response.data.pinCode,
//         //   city: response.data.city,
//         //   role: {
//         //     roleId: 2,
//         //   },
//         // });
//         setUser({
//   userName: response.data.userName || '',
//   email: response.data.email || '',
//   password: '', // Keep it blank for security
//   contactNumber: response.data.contactNumber || '',
//   dob: response.data.dob || '',
//   permanentAddress: response.data.permanentAddress || '',
//   temporaryAddress: response.data.temporaryAddress || '',
//   pinCode: response.data.pinCode || '',
//   city: response.data.city || '',
//   roleId: response.data.roleId || 2, // Use what's in response or default
// });

//         console.log("user is :",user)
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = validate();
//     setErrMsgs(errors);
//     if (Object.keys(errors).length) return;
//     if(userId){

//         const response = await HotelService.updateRegister(user,userId);
//       if (response.status === 200) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Updated  successfully',
//         });
//         navigate(-1);
//       }
//     }
//     else{

//     try {
//       const res = await HotelService.createRegister(user);
//       if (res.status === 200 || res.status === 201) {
//         Swal.fire({ icon: 'success', title: 'Registration Successful!' });
//         navigate('/login');
//       } else {
//         Swal.fire({ icon: 'error', title: 'Registration Failed', text: 'Try again later.' });
//       }
//     } catch (err) {
//       Swal.fire({
//         icon : 'error',
//         title: 'Server Error',
//         text : err.response?.data?.message || 'Something went wrong!',
//       });
//     }
//   }
//   };

//   return (
//     <div className="container-fluid d-flex flex-row p-0" style={{ minHeight: '120vh',paddingTop:'3rem ' }}>
//       {/* Left: Background Image Only */}
      
//       <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center"
//            style={{
//              backgroundImage: 'url("/images/register.jpg")',
//              backgroundSize: 'cover',
//              backgroundPosition: 'center',
//              height:'80vh',
//              position: 'relative',
//            }}>
//             <button
//                 onClick={() => navigate(-1)}
//                 className='btn btn-secondary btn-sm'
//                 style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
//             >
//                 ← Back
//             </button>
//       </div>

//       {/* Right: Form Card */}
//       <div className="col-md-6 d-flex align-items-center justify-content-center p-4">
//         <div className="w-100" style={{
//           maxWidth: 550, background: '#fff', borderRadius: 20,
//           boxShadow: '0 0 25px rgba(0,0,0,0.1)', padding: 30,
//           textAlign:'left'
//         }}>
//           <h2 className="text-center mb-4">User Registration</h2>
//           <form onSubmit={handleSubmit}>
//             {/* Username */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">User Name</label>
//               <input name="userName" className="form-control" value={user.userName}
//                      onChange={handleChange} />
//               {errMsgs.userName && <small className="text-danger">{errMsgs.userName}</small>}
//             </div>

//             {/* Email + Password */}
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-semibold">Email</label>
//                 <input name="email" className="form-control" value={user.email}
//                        onChange={handleChange} />
//                 {errMsgs.email && <small className="text-danger">{errMsgs.email}</small>}
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-semibold">Password</label>
//                 <input type="password" name="password" className="form-control"
//                        value={user.password} onChange={handleChange} />
//                 {/* {errMsgs.password && <small className="text-danger">{errMsgs.password}</small>} */}
//               </div>
//             </div>

//             {/* DOB + Contact */}
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-semibold">Date of Birth</label>
//                 <input type="date" name="dob" className="form-control"
//                        value={user.dob} onChange={handleChange} />
//                 {errMsgs.dob && <small className="text-danger">{errMsgs.dob}</small>}
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-semibold">Contact Number</label>
//                 <input name="contactNumber" className="form-control"
//                        value={user.contactNumber} onChange={handleChange} />
//                 {errMsgs.contactNumber && <small className="text-danger">{errMsgs.contactNumber}</small>}
//               </div>
//             </div>

//             {/* Permanent Address */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Permanent Address</label>
//               <input name="permanentAddress" className="form-control"
//                      value={user.permanentAddress} onChange={handleChange} />
//               {errMsgs.permanentAddress && <small className="text-danger">{errMsgs.permanentAddress}</small>}
//             </div>

//             {/* Temporary Address */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Temporary Address</label>
//               <input name="temporaryAddress" className="form-control"
//                      value={user.temporaryAddress} onChange={handleChange} />
//               {errMsgs.temporaryAddress && <small className="text-danger">{errMsgs.temporaryAddress}</small>}
//             </div>

//             {/* City + Pin Code */}
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-semibold">City</label>
//                 <input name="city" className="form-control" value={user.city}
//                        onChange={handleChange} />
//                 {errMsgs.city && <small className="text-danger">{errMsgs.city}</small>}
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label fw-semibold">Pin Code</label>
//                 <input name="pinCode" className="form-control" value={user.pinCode}
//                        onChange={handleChange} />
//                 {errMsgs.pinCode && <small className="text-danger">{errMsgs.pinCode}</small>}
//               </div>
//             </div>

//             {/* Submit */}
//             <button className="btn w-100 mb-3" style={{
//               background: '#f9bf7b', border: 'none', fontWeight: 600
//             }}>
//               Register
//             </button>

//             {/* Login link */}
//             <div className="text-center small">
//               Already registered? <Link to="/login">Login here</Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { HotelService } from './HotelService/HotelService';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: '', email: '', password: '', contactNumber: '',
    dob: '', permanentAddress: '', temporaryAddress: '',
    pinCode: '', city: '', roleId: 2,
  });
  const [errMsgs, setErrMsgs] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setUser(prev => ({ ...prev, [name]: value }));
    setErrMsgs(prev => ({ ...prev, [name]: '' }));
  };
const validate = () => {
  const e = {};

  // Username validation
  if (!user.userName.trim()) {
    e.userName = 'Username is required';
  } else if (!/^[A-Za-z ]+$/.test(user.userName.trim())) {
    e.userName = 'Only letters allowed';
  } else if (user.userName.length > 45) {
    e.userName = 'Max 45 characters';
  }

  // Email validation
  if (!user.email.trim()) {
    e.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email.trim())) {
    e.email = 'Invalid email';
  }

  // Password validation
  if (!user.password.trim()) {
    e.password = 'Password is required';
  } else if (user.password.length < 8) {
    e.password = 'Min 8 characters';
  }

  // Contact Number validation
  if (!user.contactNumber.trim()) {
    e.contactNumber = 'Contact is required';
  } else if (!/^\d{10}$/.test(user.contactNumber.trim())) {
    e.contactNumber = 'Must be 10 digits';
  }

  // Date of Birth validation
  if (!user.dob.trim()) {
    e.dob = 'Date of birth is required';
  }

  // Permanent Address validation
  if (!user.permanentAddress.trim()) {
    e.permanentAddress = 'Permanent address is required';
  } else if (user.permanentAddress.length > 225) {
    e.permanentAddress = 'Max 225 characters';
  }

  // Temporary Address validation
  if (!user.temporaryAddress.trim()) {
    e.temporaryAddress = 'Temporary address is required';
  } else if (user.temporaryAddress.length > 225) {
    e.temporaryAddress = 'Max 225 characters';
  }

  // Pincode validation
  if (!user.pinCode.trim()) {
    e.pinCode = 'PinCode is required';
  } else if (!/^\d{6}$/.test(user.pinCode.trim())) {
    e.pinCode = 'Must be 6 digits';
  }

  // City validation (updated for only letters and spaces)
  if (!user.city.trim()) {
    e.city = 'City is required';
  } else if (!/^[A-Za-z\s]+$/.test(user.city.trim())) {
    e.city = 'City must contain only letters';
  } else if (user.city.length > 45) {
    e.city = 'Max 45 characters';
  }

  return e;
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setErrMsgs(errors);
    if (Object.keys(errors).length) return;

    try {
      const res = await HotelService.createRegister(user);
      if (res.status === 200 || res.status === 201) {
        Swal.fire({ icon: 'success', title: 'Registration Successful!' });
        navigate('/login');
      } else {
        Swal.fire({ icon: 'error', title: 'Registration Failed', text: 'Try again later.' });
      }
    } catch (err) {
      Swal.fire({
        icon : 'error',
        title: 'Server Error',
        text : err.response?.data?.message || 'Something went wrong!',
      });
    }
  };

  return (
    <div className="container-fluid d-flex flex-row p-0" style={{ minHeight: '120vh',paddingTop:'3rem ' }}>
      {/* Left: Background Image Only */}
      <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center"
           style={{
             backgroundImage: 'url("/images/register.jpg")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             height:'80vh',
             position: 'relative',
           }}>
      </div>

      {/* Right: Form Card */}
      <div className="col-md-6 d-flex align-items-center justify-content-center p-4">
        <div className="w-100" style={{
          maxWidth: 550, background: '#fff', borderRadius: 20,
          boxShadow: '0 0 25px rgba(0,0,0,0.1)', padding: 30,
        }}>
          <h2 className="text-center mb-4">User Registration</h2>
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-3">
              <label className="form-label fw-semibold">User Name</label>
              <input name="userName" className="form-control" value={user.userName}
                     onChange={handleChange} />
              {errMsgs.userName && <small className="text-danger">{errMsgs.userName}</small>}
            </div>

            {/* Email + Password */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input name="email" className="form-control" value={user.email}
                       onChange={handleChange} />
                {errMsgs.email && <small className="text-danger">{errMsgs.email}</small>}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input type="password" name="password" className="form-control"
                       value={user.password} onChange={handleChange} />
                {errMsgs.password && <small className="text-danger">{errMsgs.password}</small>}
              </div>
            </div>

            {/* DOB + Contact */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Date of Birth</label>
                <input type="date" name="dob" className="form-control"
                       value={user.dob} onChange={handleChange} />
                {errMsgs.dob && <small className="text-danger">{errMsgs.dob}</small>}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Contact Number</label>
                <input name="contactNumber" className="form-control"
                       value={user.contactNumber} onChange={handleChange} />
                {errMsgs.contactNumber && <small className="text-danger">{errMsgs.contactNumber}</small>}
              </div>
            </div>

            {/* Permanent Address */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Permanent Address</label>
              <input name="permanentAddress" className="form-control"
                     value={user.permanentAddress} onChange={handleChange} />
              {errMsgs.permanentAddress && <small className="text-danger">{errMsgs.permanentAddress}</small>}
            </div>
            {/* Temporary Address */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Temporary Address</label>
              <input name="temporaryAddress" className="form-control"
                     value={user.temporaryAddress} onChange={handleChange} />
              {errMsgs.temporaryAddress && <small className="text-danger">{errMsgs.temporaryAddress}</small>}
            </div>
            {/* City + Pin Code */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">City</label>
                <input name="city" className="form-control" value={user.city}
                       onChange={handleChange} />
                {errMsgs.city && <small className="text-danger">{errMsgs.city}</small>}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Pin Code</label>
                <input name="pinCode" className="form-control" value={user.pinCode}
                       onChange={handleChange} />
                {errMsgs.pinCode && <small className="text-danger">{errMsgs.pinCode}</small>}
              </div>
            </div>

            {/* Submit */}
            <button className="btn w-100 mb-3" style={{
              background: '#f9bf7b', border: 'none', fontWeight: 600
            }}>
              Register
            </button>

            {/* Login link */}
            <div className="text-center small">
              Already registered? <Link to="/login">Login here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};