import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';
import Header from '../Component/Navbar/Header';

const routeNames = {
  '/admin/dashboard': { name: 'Dashboard', icon: 'dashboard', placeholder: '', showSearch: true },
  '/admin/customer': { name: 'Customers', icon: 'people', placeholder: 'search customer', showSearch: true },
  '/admin/order': { name: 'Generate Order', icon: 'shopping_cart', placeholder: '', showSearch: false },
  '/admin/inventory': { name: 'Inventory', icon: 'inventory', placeholder: 'search inventory', showSearch: true },
  '/admin/tracking': { name: 'Tracking', icon: 'local_shipping', placeholder: '', showSearch: false },
  '/admin/logout': { name: 'Log Out', icon: 'logout', placeholder: '', showSearch: false },
};

function AdminLayout() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const routeInfo = routeNames[location.pathname] || { name: 'Dashboard', icon: 'dashboard', placeholder: '', showSearch: true };

  return (
    <>
      <Header routeInfo={routeInfo} searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-10 mt-16 ml-64 overflow-auto">
          <Outlet context={{ searchTerm }} />
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
