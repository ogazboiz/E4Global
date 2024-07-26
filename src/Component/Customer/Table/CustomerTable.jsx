import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useOutletContext } from 'react-router-dom';
import CustomerStats from '../Stats/CustomerStats';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customerStats, setCustomerStats] = useState({
    totalCustomers: 0,
    activeCustomers: 0,
    inactiveCustomers: 0,
  });
  const { searchTerm } = useOutletContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerResponse = await axios.get('https://e4-global-backend.onrender.com/api/v1/customer/');
        const fetchedCustomers = customerResponse.data.data.reverse();
        setCustomers(fetchedCustomers);
        setFilteredCustomers(fetchedCustomers);

        const orderResponse = await axios.get('https://e4-global-backend.onrender.com/api/v1/shipment/all');
        const fetchedOrders = orderResponse.data.data.shipments;
        setOrders(fetchedOrders);

        updateCustomerStats(fetchedCustomers, fetchedOrders);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filtered = customers.filter(customer =>
        customer.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        customer.email.toLowerCase().includes(lowerCaseSearchTerm) ||
        customer.phoneNumber.toString().toLowerCase().includes(lowerCaseSearchTerm) ||
        customer.customerId.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredCustomers(filtered);
    } else {
      setFilteredCustomers(customers);
    }
  }, [searchTerm, customers]);

  const updateCustomerStats = (customers, orders) => {
    const totalCustomers = customers.length;
    const activeCustomers = customers.filter(customer =>
      orders.some(order => order.customerId === customer.customerId && order.status === 'intransit')
    ).length;
    const inactiveCustomers = totalCustomers - activeCustomers;

    setCustomerStats({ totalCustomers, activeCustomers, inactiveCustomers });
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading...</div>
        {/* You can also use a loading spinner component here */}
      </div>
    );
  }
  return (
    <div className="p-4">
      <CustomerStats
        totalCustomers={customerStats.totalCustomers}
        activeCustomers={customerStats.activeCustomers}
        inactiveCustomers={customerStats.inactiveCustomers}
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
            {filteredCustomers.map((customer) => (
              <tr key={customer.customerId}>
                <td className="px-4 py-2 border-b border-gray-200">{customer.name}</td>
                <td className="px-4 py-2 border-b border-gray-200">{customer.email}</td>
                <td className="px-4 py-2 border-b border-gray-200">{customer.phoneNumber}</td>
                <td className="px-4 py-2 border-b border-gray-200">{customer.customerId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
