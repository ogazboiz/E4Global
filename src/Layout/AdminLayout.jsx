import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';

function AdminLayout() {
  return (
    <>
    <header className="bg-gray-800 p-4 text-white">
          <div className="container mx-auto">
            <h1 className="text-2xl">Admin Dashboard</h1>
          </div>
        </header>
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
