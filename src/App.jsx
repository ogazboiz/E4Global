import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import RootLayout from './Layout/RootLayout';
import AdminLayout from './Layout/AdminLayout';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
