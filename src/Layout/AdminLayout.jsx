import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';
import Header from "../Component/Navbar/Header";
function AdminLayout() {
  return (
    <>
    <Header/>
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        
        <main className="p-10">
          <Outlet />
        </main>
      </div>
    </div>
    </>
  );
}

export default AdminLayout;