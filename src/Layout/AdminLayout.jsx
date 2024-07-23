import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';
import Header from '../Component/Navbar/Header';

function AdminLayout() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64 mt-16 p-10 overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
