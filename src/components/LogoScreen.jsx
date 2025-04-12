import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoScreen = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/mood');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F5EAFB] text-center px-4">
      <img src="/wondermaps_logo.png.jpg" alt="WonderMaps Logo" className="w-40 h-40 mb-6" />

      <h1 className="text-4xl font-bold text-purple-800 mb-4">Welcome to WonderMaps</h1>
      <p className="text-lg text-blue-600 mb-6">Your mood-based travel buddy!</p>

      <button
        onClick={handleStart}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
      >
        Start Exploring
      </button>
    </div>
  );
};

export default LogoScreen;
