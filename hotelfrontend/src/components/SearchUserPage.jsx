import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HotelService } from './HotelService/HotelService';

export const SearchUserPage = () => {
    const [searchType, setSearchType] = useState('userId');
    const [searchInput, setSearchInput] = useState('');
    const [selectedCustomerId, setSelectedCustomerId] = useState(null);
    const [customers, setCustomers] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
  console.log('Selected Customer ID:', selectedCustomerId);
  console.log('LocalStorage userId:', localStorage.getItem('userId'));
}, [selectedCustomerId]);
    
    useEffect(() => {
      const fetchCustomers = async () => {
        setIsLoading(true);
        try {
          const response = await HotelService.fetchallUsers();
          setCustomers(response.data);
          setFilteredCustomers(response.data);
        } catch (error) {
          setError(error.message);
          console.error('Error fetching customers:', error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchCustomers();
    }, []);

  useEffect(() => {
  if (searchInput.trim() === '') {
    setFilteredCustomers(customers);
    return;
  }

  const fieldMap = {
    userId: 'userId',
    userName: 'userName',
    contactNumber: 'contactNumber',
    email: 'email',
  };

  const fieldKey = fieldMap[searchType];
  if (!fieldKey) return;

  const filtered = customers.filter((customer) => {
    const value = customer[fieldKey];
    return value?.toString().toLowerCase().includes(searchInput.toLowerCase());
  });

  setFilteredCustomers(filtered);
}, [searchInput, searchType, customers]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const addReservation = () => {
    localStorage.setItem("customerId",selectedCustomerId);
    navigate('/rooms');
  };
  
  const updateReservation = (userId) => {
    navigate(`/reservation/${userId}`);
  };

  const updateCustomer = (userId) => {
    navigate(`/register/${userId}`);
  };

  
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
            <option value="userId">By Id</option>
            <option value="userName">By Name</option>
            <option value="contactNumber">By Mobile number</option>
            <option value="email">By Email</option>
          </select>

          <div className="d-flex" style={{ gap: '10px' }}>
            <Form style={{ width: '300px' }}>
              <Form.Group>
                <Form.Control
                  type={searchType === 'userId' ? 'number' : 'text'}
                  placeholder={`Enter ${searchType}`}
                  value={searchInput}
                  onChange={handleInputChange}
                  className="form-control rounded-pill border-info shadow-sm"
                  style={{ height: '45px', fontSize: '1rem' }}
                />
              </Form.Group>
            </Form>
          </div>
        </div>

        {isLoading && <div className="text-center">Loading customers...</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-4">
          <h1 className="mb-3">User Search Results</h1>
          {filteredCustomers.length > 0 ? (
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
                
                {filteredCustomers.map((customer) => (
                  
                  <tr key={customer.userId || customer.id || customer.email}>
                    <td>{customer.userName}</td>
                    <td>{customer.userId || customer.UserId}</td>
                    <td>{customer.contactNumber}</td>
                    <td>{customer.email}</td>
                    <td>
                      <input 
                        type="radio" 
                        name="customerSelect" 
                        value={customer.userId} 
                        checked={selectedCustomerId === customer.userId} 
                        onChange={() => setSelectedCustomerId(customer.userId)}
                        style={{ transform: 'scale(1.5)' }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            !isLoading && <div className="alert alert-info">No customers found</div>
          )}
        </div>

        <div className="text-center mt-4">
          <button 
            className="btn btn-success mx-2" 
            onClick={() => addReservation(selectedCustomerId)}
            disabled={!selectedCustomerId}
          >
            Make a Reservation
          </button>
          {/* <button 
            className="btn btn-warning mx-2" 
            onClick={() => updateReservation(selectedCustomerId)}
            disabled={!selectedCustomerId}
          >
            Update Reservation
          </button> */}
          {/* <button 
            className="btn btn-primary mx-2" 
            onClick={() => updateCustomer(selectedCustomerId)}
            disabled={!selectedCustomerId}
          >
            Update Customer
          </button> */}
          <button className="btn btn-secondary mx-2" onClick={() => navigate("/admin")}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};