import React from 'react';
import Sidebar from '../Component/Sidebar';
import Header from '../Component/Navbar/Header';


const AdminDashboard = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        
        <main className="p-10">
          <div className="container mx-auto">
            <h2 className="text-xl font-bold mb-4">Welcome to the Admin Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white shadow-md rounded p-4">
                <div className="text-3xl font-bold">120</div>
                <div>Customers</div>
              </div>
              <div className="bg-white shadow-md rounded p-4">
                <div className="text-3xl font-bold">120</div>
                <div>Orders</div>
              </div>
              <div className="bg-white shadow-md rounded p-4">
                <div className="text-3xl font-bold">120</div>
                <div>Inventory</div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded p-4 mb-6">
              <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="border-b p-2">Order ID</th>
                    <th className="border-b p-2">Date</th>
                    <th className="border-b p-2">Status</th>
                    <th className="border-b p-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(4)].map((_, i) => (
                    <tr key={i}>
                      <td className="border-b p-2">255623</td>
                      <td className="border-b p-2">12-02-24</td>
                      <td className="border-b p-2">Delivered</td>
                      <td className="border-b p-2">1,000</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-white shadow-md rounded p-4">
              <h3 className="text-lg font-semibold mb-4">Active Shipment</h3>
              <div className="flex items-center">
                <div className="w-1/2">
                  <div className="relative pt-1 pb-2">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
                      <div style={{ width: "45%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-600"></div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
                      <div style={{ width: "65%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600"></div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <div style={{ width: "10%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600"></div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 text-right">
                  <div className="text-3xl font-bold">120</div>
                  <div>
                    <span className="text-orange-600">Pending (45)</span> | <span className="text-yellow-600">In delivery (65)</span> | <span className="text-gray-600">In Transit (10)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
