import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-gradient-to-r from-orange-500 to-orange-400 p-6 text-white z-10 overflow-auto">
      <ul className="space-y-4 mt-16">
        <li>
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => `flex items-center p-2 rounded ${isActive ? 'bg-orange-600' : 'hover:bg-orange-600'}`}
          >
            <span className="material-icons">dashboard</span>
            <span className="ml-3">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/customer"
            className={({ isActive }) => `flex items-center p-2 rounded ${isActive ? 'bg-orange-600' : 'hover:bg-orange-600'}`}
          >
            <span className="material-icons">people</span>
            <span className="ml-3">Customers</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/order"
            className={({ isActive }) => `flex items-center p-2 rounded ${isActive ? 'bg-orange-600' : 'hover:bg-orange-600'}`}
          >
            <span className="material-icons">shopping_cart</span>
            <span className="ml-3">Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/inventory"
            className={({ isActive }) => `flex items-center p-2 rounded ${isActive ? 'bg-orange-600' : 'hover:bg-orange-600'}`}
          >
            <span className="material-icons">inventory</span>
            <span className="ml-3">Inventory</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/tracking"
            className={({ isActive }) => `flex items-center p-2 rounded ${isActive ? 'bg-orange-600' : 'hover:bg-orange-600'}`}
          >
            <span className="material-icons">local_shipping</span>
            <span className="ml-3">Tracking</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/login"
            className={({ isActive }) => `flex items-center p-2 rounded ${isActive ? 'bg-orange-600' : 'hover:bg-orange-600'}`}
          >
            <span className="material-icons">logout</span>
            <span className="ml-3">Log Out</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;