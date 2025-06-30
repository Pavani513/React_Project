import React, { useEffect, useState } from 'react';

const UserCircle = () => {
const [initial, setInitial] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user?.name) {
      setInitial(user.name.charAt(0).toUpperCase());
    }
  }, []);

  return (
    <div>
      <button
  title="Account"
  className="w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold text-lg border shadow-md transition-all duration-300 hover:shadow-lg"
  style={{
    background: '#1F7D53',
    borderColor: '#6A9C89',
    borderWidth: '3px'
  }}
>
  {initial || 'P'}
</button>

    </div>
  );
};

export default UserCircle;