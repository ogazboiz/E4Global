import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AddCustomerForm = ({ addCustomer }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message
    setError('');

    // Validate phone number length
    if (phone.length < 10) {
      setError('Phone number must be at least 10 characters long');
      return;
    }

    const customerData = {
      name,
      email,
      phoneNumber: phone,
      address
    };

    console.log('Customer Data:', customerData);

    try {
      const response = await axios.post(
        'https://e4-global-backend.onrender.com/api/v1/customer/register',
        customerData
      );

      addCustomer({
        name,
        email,
        phone,
        address,
        id: response.data.data.customerId,
      });
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
      navigate('/admin/customer');
    } catch (error) {
      console.error("There was an error creating the customer:", error);
      setError(error.response?.data?.message || 'Error Creating Customer');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-orange-500">
          Add Customer
        </h1>
        {error && (
          <div className="mb-4 text-center text-red-600">{error}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-700 focus:outline-none focus:shadow-outline"
            >
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddCustomerForm.propTypes = {
  addCustomer: PropTypes.func.isRequired,
};

export default AddCustomerForm;
