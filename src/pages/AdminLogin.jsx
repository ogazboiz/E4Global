import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import car from "../assets/Images/car.png";
import carText from "../assets/Images/logo1.png";
import "./adminlogin.css";

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://e4-global-backend.onrender.com/api/v1/auth/login", {
        email,
        password,
      });

      console.log('Response:', response);  // Add this line to see the full response
      const data = response.data;
      console.log('Data:', data);  // Add this line to see the data object

      if (data.token) {
        dispatch({ type: 'LOGIN', payload: { email } });
        localStorage.setItem('authToken', data.token);
        navigate('/admin/dashboard');
      } else {
        setError('Invalid response from server');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 to-red-500">
      <div className="container mx-auto text-left">
        <div className="w-1/2 p-10 rounded-lg ">
          <h1 className="mb-4 text-3xl font-bold">Login</h1>
          <p className="mb-6">Welcome, kindly enter your details</p>
          {error && <p className="mb-4 text-red-500">{error}</p>}
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-left" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="kateholt@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-left" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-sm">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Remember me</span>
              </label>
              <a
                className="inline-block text-sm font-bold text-gray-700 align-baseline hover:text-orange-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div>
              <button
                className="bg-orange-500 w-[382px] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div>
          <img src={carText} alt="logo" className="car-logo-text"/>
          <img src={car} alt="Delivery Van" className="ml-10 car-logo"/>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
