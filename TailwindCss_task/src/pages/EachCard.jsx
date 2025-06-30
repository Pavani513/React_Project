import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../toolkit/ProductDetails';
import { useNavigate } from 'react-router-dom';
import UserCircle from './UserCircle';

const EachCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [logoutSuccess, setLogoutSuccess] = useState(false);

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return data || [];
    return (data || []).filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setShowModal(false);
    setLogoutSuccess(true);

    setTimeout(() => {
      setLogoutSuccess(false);
      navigate('/login');
    }, 1500);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    dispatch(products());
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-pink-800 cursor-pointer" onClick={() => navigate('/products')} >React Commerce</span>
            <button onClick={() => navigate('/creationpage')} className="hidden md:block px-4 py-2 text-black font-medium text-2xl rounded-md ml-8" > Create </button>
          </div>

          <div className="md:hidden">
            <button className="text-3xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)} > ☰ </button>
          </div>

          <div className="hidden md:flex flex-grow max-w-md mx-4">
            <input type="text" placeholder="Search Products" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-2 rounded-md border border-gray-300 shadow-sm" />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => setShowModal(true)} className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600" > Logout </button>
            <UserCircle user={currentUser} />
          </div>
        </div>

        {menuOpen && (
          <div className="mt-4 md:hidden flex flex-col gap-4">
            <button onClick={() => navigate('/creationpage')} className="px-4 py-2 text-black font-medium text-lg rounded-md bg-gray-100" > Create </button>
            <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-2 rounded-md border border-gray-300 shadow-sm" />
            <div className="flex flex-col items-center gap-3 w-full">
              <button onClick={() => setShowModal(true)} className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600" > Logout </button>
            </div>
          </div>
        )}
      </nav>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-300 rounded-2xl p-8 w-80 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Are you sure you want to logout?</h2>
            <div className="flex justify-center gap-4">
              <button onClick={handleLogout} className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition duration-200" > Yes</button>
              <button onClick={() => setShowModal(false)} className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-400 transition duration-200" > No </button>
            </div>
          </div>
        </div>
      )}

      {logoutSuccess && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">
    <div className="bg-gray-300 rounded-2xl p-6 w-80 shadow-xl flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <h2 className="text-lg font-semibold text-green-600">Logout done successfully!</h2>
    </div>
  </div>
)}


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((card) => (
            <div key={card.id} 
            onClick={() => navigate(`/product/${card.id}`)} className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer p-5 flex flex-col" >
              <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">{card.title}</h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{card.description}</p>
              <button className="mt-auto w-full bg-blue-400 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-500 transition duration-200" > View Details </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default EachCard;
