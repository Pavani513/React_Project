import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { singlePage } from '../toolkit/SinglePage';
import UserCircle from './UserCircle';

const CardInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const { data } = useSelector((state) => state.singleCard);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(singlePage(id));
    }
  }, [id, dispatch]);

  if (!data) return <div className="p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100">

      <nav className="bg-white shadow-md p-4 mb-1">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-pink-800 cursor-pointer" onClick={() => navigate('/products')}> React Commerce </span>

          <div className="md:hidden">
            <button className="text-3xl focus:outline-none" onClick={() => setMenuOpen((prev) => !prev)} > ☰ </button>
             </div>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => { localStorage.removeItem('currentUser'); setCurrentUser(null); navigate('/login'); }} className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600" > Login </button>
            <UserCircle user={currentUser} />
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden flex justify-end">
            <div className="flex flex-col items-end gap-3 mt-4 bg-white p-4 rounded-lg shadow-md w-fit ml-auto">
              <button onClick={() => { localStorage.removeItem('currentUser'); setCurrentUser(null); navigate('/login'); }} className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600"> Logout </button>
              <UserCircle user={currentUser} />
            </div>
          </div>
        )}
      </nav>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-6">
        <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-md lg:max-w-lg bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out p-4 mb-17">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{data.title}</h1>
          <p className="text-sm sm:text-base text-gray-600 mb-3">{data.description}</p>
          {Array.isArray(data.keyPoints) && data.keyPoints.length > 0 ? (
            <ul className="list-disc ml-5 mb-2">
              {data.keyPoints.map((point, index) => (
                <li key={index} className="text-base sm:text-md"> {point} </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-400 italic">No key benefits available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
