import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import EachCard from './pages/EachCard';
import CardInfo from './pages/CardInfo';
import CreationPage from './pages/CreationPage';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/products" element={<EachCard/>} />
        <Route path="/product/:id" element={<CardInfo/>} />
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login onLogin={setCurrentUser} />} />
        <Route path="/creationpage" element={<CreationPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
