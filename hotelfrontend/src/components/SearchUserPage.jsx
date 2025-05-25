import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const SearchUserPage = () => {
  const [searchType, setSearchType] = useState('Id');
  const [searchInput, setSearchInput] = useState('');
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const navigate=useNavigate();

  const customers = [
    { id: '14574', name: 'Alice Johnson', mobile: '+91 9021942101', email: 'alice@example.com' },
    { id: '14575', name: 'John Johnson', mobile: '+91 9021942102', email: 'john@example.com' },
    { id: '14576', name: 'Michael Johnson', mobile: '+91 9021942103', email: 'michael@example.com' },
    { id: '14577', name: 'Emma Watson', mobile: '+91 9021942104', email: 'emma@example.com' },
    { id: '14578', name: 'David Smith', mobile: '+91 9021942105', email: 'david@example.com' },
  ];

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const addReservation=(userId)=>{
        navigate(`/reservation`)
    }
  
  const updateReservation=(userId)=>{
        navigate(`/reservation/${userId}`)
    }

  const updateCustomer=(userId)=>{
        navigate(`/register/${userId}`)
    }

  return (
    <div
      style={{
        backgroundImage:"url('/images/hotel.frame.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <div className="container bg-white bg-opacity-75 rounded p-4 shadow">
        <div className="d-flex align-items-center mb-4 flex-wrap">
        <select
            className="form-select rounded-pill border-info shadow-sm me-3"
            style={{ width: '200px', fontSize: '1rem', height: '45px' }}
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
        >
            <option value="Id">By Id</option>
            <option value="name">By Name</option>
            <option value="mobile">By Mobile number</option>
            <option value="email">By Email</option>
        </select>

        <div className="d-flex" style={{ gap: '10px' }}>
            <Form style={{ width: '300px' }}>
            <Form.Group>
                <Form.Control
                type={searchType === 'Id' ? 'number' : 'text'}
                placeholder={`Enter ${searchType}`}
                value={searchInput}
                onChange={handleInputChange}
                className="form-control rounded-pill border-info shadow-sm"
                style={{ height: '45px', fontSize: '1rem' }}
                />
            </Form.Group>
            </Form>
            <button className="btn btn-info" style={{ height: '45px' }}>
            Search
            </button>
        </div>
        </div>


        <div className="mb-4">
          <h1 className="mb-3">Customer Search Results</h1>
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.id}</td>
                  <td>{customer.mobile}</td>
                  <td>{customer.email}</td>
                  <td>
                    <input type="radio" name="customerSelect" value={customer.id} checked={selectedCustomerId === customer.id} onChange={() => setSelectedCustomerId(customer.id)}
                      style={{ transform: 'scale(1.5)' }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-4">
            <button className="btn btn-success mx-2" onClick={() => addReservation(selectedCustomerId)}>Make a Reservation</button>
            <button className="btn btn-warning mx-2" onClick={() => updateReservation(selectedCustomerId)}>Update Reservation</button>
            <button className="btn btn-primary mx-2" onClick={() => updateCustomer(selectedCustomerId)}>Update Customer</button>
            <button className="btn btn-secondary mx-2" onClick={() => navigate("/admin")}>Back</button>
        </div>
      </div>
    </div>
  );
};
