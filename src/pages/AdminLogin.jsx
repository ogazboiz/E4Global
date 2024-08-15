import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import carText from "../assets/Images/bg.png";
import "./adminlogin.css";

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // New loading state
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const handleLogin = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.post("https://e4-global-backend.onrender.com/api/v1/auth/login", {
        email,
        password,
      });

      const data = response.data;

      if (data.token) {
        dispatch({ type: 'LOGIN', payload: { email } });
        localStorage.setItem('authToken', data.token);
        navigate('/admin/dashboard');
      } else {
        setError('Invalid response from server');
      }
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setLoading(false); // Stop loading after request completes
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 to-red-500">
      <div className="w-full md:w-1/2 lg:w-1/3 p-8">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Login</h1>
        <p className="text-lg text-white mb-4 text-center">Welcome, kindly enter your details</p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="mb-4">
            <label className="block text-sm font-bold text-white mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              id="email"
              type="email"
              placeholder="kateholt@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-white mb-2" htmlFor="password">Password</label>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between mb-4">
            <label className="flex items-center text-sm text-white">
              <input className="mr-2" type="checkbox" />
              Remember me
            </label>
            <a href="#" className="text-sm text-white hover:text-orange-200">Forgot Password?</a>
          </div>
          <button
            className={`w-full bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-700 transition-colors flex justify-center items-center ${loading ? 'cursor-not-allowed' : ''}`}
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.961 7.961 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>

      <div className="hidden md:flex w-full h-96 md:w-1/2 justify-center items-center p-5">
        <img
          src={carText}
          alt="car"
          className="w-[250%] h-[150%] object-cover"
        />
      </div>
    </div>
  );
}

export default AdminLogin;
