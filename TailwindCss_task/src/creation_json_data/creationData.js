
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CreationData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Created Products</h2>
      {data.length > 0 ? (
        <ul className="space-y-2">
          {data.map((item) => (
            <li key={item.id} className="border p-3 rounded shadow">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p>{item.description}</p>
              <ul className="list-disc ml-5 text-sm text-gray-700">
                {item.keyPoints?.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default CreationData;