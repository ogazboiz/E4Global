import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [customersCount, setCustomersCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [inventoryCount, setInventoryCount] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [shipmentStats, setShipmentStats] = useState({
    pending: 0,
    delivery: 0,
    intransit: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch the total number of customers
        const customersResponse = await axios.get('https://e4-global-backend.onrender.com/api/v1/customer/');
        setCustomersCount(customersResponse.data.data.length);

        // Fetch the total number of orders
        const ordersResponse = await axios.get('https://e4-global-backend.onrender.com/api/v1/shipment/all');
        setOrdersCount(ordersResponse.data.data.shipments.length);

        // Fetch the total number of inventory items
        //const inventoryResponse = await axios.get('/api/inventory/count');
        // setInventoryCount(inventoryResponse.data.count);

        // Fetch transaction history
        //const transactionsResponse = await axios.get('/api/transactions');
       // setTransactions(transactionsResponse.data.transactions);

        // Fetch shipment stats
       // const shipmentResponse = await axios.get('https://e4-global-backend.onrender.com/api/v1/shipment/all');
        //const shipments = shipmentResponse.data.data.shipments;
        //const stats = {
         // pending: shipments.filter((s: any) => s.status === 'pending').length,
         // delivery: shipments.filter((s: any) => s.status === 'delivery').length,
        //  intransit: shipments.filter((s: any) => s.status === 'intransit').length,
       // };
        //setShipmentStats(stats);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="flex">
      <div className="flex-1">
        <main className="p-10">
          <div className="container mx-auto">
            <h2 className="mb-4 text-xl font-bold">
              Welcome to the Admin Dashboard, {user.name}
            </h2>
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
              <div className="p-4 bg-white rounded shadow-md">
                <div className="text-3xl font-bold">{customersCount}</div>
                <div>Customers</div>
              </div>
              <div className="p-4 bg-white rounded shadow-md">
                <div className="text-3xl font-bold">{ordersCount}</div>
                <div>Orders</div>
              </div>
              <div className="p-4 bg-white rounded shadow-md">
                <div className="text-3xl font-bold">{inventoryCount}</div>
                <div>Inventory</div>
              </div>
            </div>
            <div className="p-4 mb-6 bg-white rounded shadow-md">
              <h3 className="mb-4 text-lg font-semibold">
                Transaction History
              </h3>
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="p-2 border-b">Order ID</th>
                    <th className="p-2 border-b">Date</th>
                    <th className="p-2 border-b">Status</th>
                    <th className="p-2 border-b">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, i) => (
                    <tr key={i}>
                      <td className="p-2 border-b">{transaction.orderId}</td>
                      <td className="p-2 border-b">{new Date(transaction.date).toLocaleDateString()}</td>
                      <td className="p-2 border-b">{transaction.status}</td>
                      <td className="p-2 border-b">{transaction.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-white rounded shadow-md">
              <h3 className="mb-4 text-lg font-semibold">Active Shipments</h3>
              <div className="flex items-center">
                <div className="w-1/2">
                  <div className="relative pt-1 pb-2">
                    <div className="flex h-2 mb-4 overflow-hidden text-xs bg-orange-200 rounded">
                      <div
                        style={{ width: `${(shipmentStats.pending / ordersCount) * 100}%` }}
                        className="flex flex-col justify-center text-center text-white bg-orange-600 shadow-none whitespace-nowrap"
                      ></div>
                    </div>
                    <div className="flex h-2 mb-4 overflow-hidden text-xs bg-yellow-200 rounded">
                      <div
                        style={{ width: `${(shipmentStats.delivery / ordersCount) * 100}%` }}
                        className="flex flex-col justify-center text-center text-white bg-yellow-600 shadow-none whitespace-nowrap"
                      ></div>
                    </div>
                    <div className="flex h-2 overflow-hidden text-xs bg-gray-200 rounded">
                      <div
                        style={{ width: `${(shipmentStats.intransit / ordersCount) * 100}%` }}
                        className="flex flex-col justify-center text-center text-white bg-gray-600 shadow-none whitespace-nowrap"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 text-right">
                  <div className="text-3xl font-bold">{ordersCount}</div>
                  <div>
                    <span className="text-orange-600">Pending ({shipmentStats.pending})</span> |{' '}
                    <span className="text-yellow-600">In Delivery ({shipmentStats.delivery})</span> |{' '}
                    <span className="text-gray-600">In Transit ({shipmentStats.intransit})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
