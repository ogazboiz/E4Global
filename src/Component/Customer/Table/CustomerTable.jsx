import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CustomerStats from '../Stats/CustomerStats';
// Import the CustomerStats component

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('https://e4-global-backend.onrender.com/api/v1/customer/');
        setCustomers(response.data.data); // Adjust this based on your actual API response structure
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  // Calculate customer statistics
  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(customer => customer.status === 'active').length;
  const inactiveCustomers = customers.filter(customer => customer.status === 'inactive').length;

  return (
    <div className="p-4">
      <CustomerStats
        totalCustomers={totalCustomers}
        activeCustomers={activeCustomers}
        inactiveCustomers={inactiveCustomers}
      />
      <div className="flex justify-end mb-4">
        <Link to="/admin/customer/add">
          <button className="px-4 py-2 text-white bg-orange-500 rounded-full">
            Add customer
          </button>
        </Link>
      </div>
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="items-center gap">
            <tr>
              <th className="px-4 py-2 border-b border-gray-200">Name</th>
              <th className="px-4 py-2 border-b border-gray-200">Email</th>
              <th className="px-4 py-2 border-b border-gray-200">Phone number</th>
              <th className="px-4 py-2 border-b border-gray-200">Customer ID</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className="px-4 py-2 border-b border-gray-200">
                  {customer.name}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {customer.email}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {customer.phoneNumber}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {customer.customerId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
