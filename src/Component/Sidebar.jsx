import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-gradient-to-r from-orange-500 to-orange-400 p-6 text-white z-10 overflow-auto">
      <ul className="space-y-4 mt-16">
        <li>
          <Link to="/admin/dashboard" className="flex items-center p-2 hover:bg-orange-600 rounded">
            <span className="material-icons">dashboard</span>
            <span className="ml-3">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/customer" className="flex items-center p-2 hover:bg-orange-600 rounded">
            <span className="material-icons">people</span>
            <span className="ml-3">Customers</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/order" className="flex items-center p-2 hover:bg-orange-600 rounded">
            <span className="material-icons">shopping_cart</span>
            <span className="ml-3">Orders</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/inventory" className="flex items-center p-2 hover:bg-orange-600 rounded">
            <span className="material-icons">inventory</span>
            <span className="ml-3">Inventory</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/tracking" className="flex items-center p-2 hover:bg-orange-600 rounded">
            <span className="material-icons">local_shipping</span>
            <span className="ml-3">Tracking</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/logout" className="flex items-center p-2 hover:bg-orange-600 rounded">
            <span className="material-icons">logout</span>
            <span className="ml-3">Log Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
