import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('http://localhost:5000/users');
      const users = res.data;

const validUser = users.find(
  (user) =>
    user?.email?.toLowerCase().trim() === form.email.toLowerCase().trim() &&
    user.password === form.password
);


      if (validUser) {
        localStorage.setItem('currentUser', JSON.stringify(validUser));
        onLogin(validUser);
        alert('Login successful!');
        navigate('/products');
      } else {
        alert('Invalid credentials.');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" required />

          <div className="relative">
            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full border p-2 rounded pr-10" required />
            <span className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600 text-sm" onClick={() => setShowPassword((prev) => !prev)} title={showPassword ? 'Hide password' : 'Show password'} > {showPassword ? '🔓' : '🔒'} </span>
          </div>

          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600" > Login </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600"> Don't have an account?{' '} <Link to="/" className="text-green-600 hover:underline"> Sign up </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
