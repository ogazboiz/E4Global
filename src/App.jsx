import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import { AuthProvider } from './context/AuthContext';

import RootLayout from './Layout/RootLayout';
import AdminLayout from './Layout/AdminLayout';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Customer from './pages/Customer';
import Order from './pages/Order';
import Inventory from './pages/Inventory';
import Tracking from './pages/Tracking';
import Logout from './pages/Logout';
import PrivateRoute from './Component/PrivateRoute';
import AddCustomerForm from './Component/Customer/Table/AddCustomerForm';
import LogisticsServices from './pages/LogisticsServices';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
// import AddCustomerForm from './pages/AddCustomerForm';

function App() {
  const [customers, setCustomers] = useState([
    { name: 'Kate Holt', email: 'kateholt@gmail.com', phone: '081111111111', id: '9292' },
    { name: 'uche ekezie', email: 'uche@gmail.com', phone: '0811111134431', id: '9292' },
    { name: 'Akpolo prince', email: 'akpoloprince@gmail.com', phone: '081111111', id: '9292' },
    { name: 'pascal joseph', email: 'pascalt@gmail.com', phone: '08134111111', id: '9292' },
    // Add more initial customers if needed
  ]);

  const addCustomer = (newCustomer) => {
    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/services' element={<LogisticsServices/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/faq' element={<Faq/>} />
          </Route>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='dashboard' element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            } />
            <Route path='customer' element={
              <PrivateRoute>
                <Customer customers={customers} />
              </PrivateRoute>
            } />
            <Route path='customer/add' element={
              <PrivateRoute>
                <AddCustomerForm addCustomer={addCustomer} />
              </PrivateRoute>
            } />
            <Route path='order' element={
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            } />
            <Route path='inventory' element={
              <PrivateRoute>
                <Inventory />
              </PrivateRoute>
            } />
            <Route path='tracking' element={
              <PrivateRoute>
                <Tracking />
              </PrivateRoute>
            } />
            <Route path='logout' element={<Logout />} />
            <Route
              path=""
              element={<Navigate to="login" />}
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
