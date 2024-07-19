import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import car from "../assets/Images/car.png";
import carText from "../assets/Images/logo1.png";
import "./adminlogin.css";

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Dummy login data
  const dummyData = [
    { email: 'admin1@example.com', password: 'password1' },
    { email: 'admin2@example.com', password: 'password2' },
  ];

  const handleLogin = () => {
    // Check if the entered credentials match any in the dummy data
    const user = dummyData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Successful login, navigate to admin dashboard
      navigate('/admin/dashboard');
    } else {
      // Show error message
      setError('Invalid email or password');
    }
  };

  return (
    <div className="bg-gradient-to-r from-orange-400 to-red-500 min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-left">
        <div className="p-10 rounded-lg w-1/2">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <p className="mb-6">Welcome, kindly enter your details</p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <div className="mb-4">
              <label className="block text-left text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="kateholt@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="inline-block align-baseline font-bold text-sm text-gray-700 hover:text-orange-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div>
              <button
                className="bg-orange-500 w-[382px] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="submit" // Change type to "submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div>
          <img src={carText} alt="logo" className="car-logo-text" />
          <img
            src={car}
            alt="Delivery Van"
            className="ml-10 car-logo"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
