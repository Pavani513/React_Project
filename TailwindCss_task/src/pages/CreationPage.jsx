import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreationPage = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    keyPoints: [''],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleKeyPointChange = (index, value) => {
    const updatedKeyPoints = [...formData.keyPoints];
    updatedKeyPoints[index] = value;
    setFormData(prev => ({ ...prev, keyPoints: updatedKeyPoints }));
  };

  const addKeyPoint = () => {
    setFormData(prev => ({
      ...prev,
      keyPoints: [...prev.keyPoints, '']
    }));
  };

  const removeKeyPoint = (index) => {
    const updatedKeyPoints = formData.keyPoints.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, keyPoints: updatedKeyPoints }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      title: formData.title,
      description: formData.description,
      keyPoints: formData.keyPoints,
    };

    try {
      await axios.post('http://localhost:3000/products', newProduct);
      alert('Product created successfully!');
      setFormData({ title: '', description: '', keyPoints: [''] });
      navigate('/products'); 
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Failed to create product');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-6 bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Create Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input type="text" name="title" placeholder="Product Title" value={formData.title} onChange={handleChange} className="w-full h-12 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" required/>
        </div>
        <div>
          <textarea name="description" placeholder="Product Description" value={formData.description} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" required/>
        </div>
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-3">Key Benefits</label>
          {formData.keyPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2 mb-3">
              <input type="text" value={point} onChange={(e) => handleKeyPointChange(index, e.target.value)} className="flex-grow h-11 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" required />
              <button type="button" onClick={() => removeKeyPoint(index)} className="text-red-600 text-sm font-semibold px-3 py-2 border border-red-200 rounded hover:bg-red-50 disabled:opacity-50" disabled={formData.keyPoints.length === 1} >Remove </button>
            </div>
          ))}
          <button type="button" onClick={addKeyPoint} className="text-blue-600 text-sm font-semibold px-4 py-2 border border-blue-200 rounded hover:bg-blue-50 transition"> + Add Benefit</button>
        </div>
        <div className="pt-4 flex justify-end">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"> Submit </button>
        </div>
      </form>
    </div>
  );
};

export default CreationPage;
