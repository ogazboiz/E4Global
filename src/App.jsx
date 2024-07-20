import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/adminlogin' element={<AdminLogin />} />
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='dashboard' element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            } />
            <Route path='customer' element={
              <PrivateRoute>
                <Customer />
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
            <Route path='logout' element={
              <PrivateRoute>
                <Logout />
              </PrivateRoute>
            } />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
