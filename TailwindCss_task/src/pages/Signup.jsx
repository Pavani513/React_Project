import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.post('http://localhost:5000/users', form);
      alert("Signup successful");
      navigate('/login');
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required />

          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required/>

          <div className="relative">
            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full border border-gray-300 p-3 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required/>
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500" onClick={() => setShowPassword((prev) => !prev)} title={showPassword ? 'Hide password' : 'Show password'} > {showPassword ? '🔓' : '🔒'} </span>
          </div>

          <div className="relative">
            <input type={showConfirm ? 'text' : 'password'} name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} className="w-full border border-gray-300 p-3 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required/>
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500" onClick={() => setShowConfirm((prev) => !prev)} title={showConfirm ? 'Hide password' : 'Show password'} > {showConfirm ? '🔓' : '🔒'} </span>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white font-semibold p-3 rounded-md hover:bg-blue-700 transition" > Sign Up </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600"> Already have an account?{' '} <Link to="/login" className="text-blue-600 hover:underline"> Login </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;







