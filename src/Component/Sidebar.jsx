import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/admin/dashboard" className="block p-2 text-gray-700 hover:bg-gray-300 rounded">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/customer" className="block p-2 text-gray-700 hover:bg-gray-300 rounded">Customer</Link>
        </li>
        <li>
          <Link to="/admin/order" className="block p-2 text-gray-700 hover:bg-gray-300 rounded">Order</Link>
        </li>
        <li>
          <Link to="/admin/inventory" className="block p-2 text-gray-700 hover:bg-gray-300 rounded">Inventory</Link>
        </li>
        <li>
          <Link to="/admin/tracking" className="block p-2 text-gray-700 hover:bg-gray-300 rounded">Tracking</Link>
        </li>
        <li>
          <Link to="/admin/logout" className="block p-2 text-gray-700 hover:bg-gray-300 rounded">Log Out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
