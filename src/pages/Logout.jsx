import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    navigate('/admin/login', { replace: true });
  }, [logout, navigate]);

  return null; // Render nothing as it's a redirect component
}

export default Logout;
