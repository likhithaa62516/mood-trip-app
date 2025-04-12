import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const moods = [
  { label: 'Happy', emoji: '😊' },
  { label: 'Sad', emoji: '😢' },
  { label: 'Angry', emoji: '😡' },
  { label: 'Calm', emoji: '😌' },
  { label: 'Confused', emoji: '😕' },
  { label: 'Adventurous', emoji: '😎' },
  { label: 'Tired', emoji: '😴' },
];

export default function MoodSelector() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState('');

  const handleNext = () => {
    if (selectedMood) {
      navigate('/places', { state: { mood: selectedMood } });
    } else {
      alert('Please select a mood before continuing!');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#EAF7FA] text-center px-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">How are you feeling today?</h2>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {moods.map(({ label, emoji }) => (
          <button
            key={label}
            onClick={() => setSelectedMood(label)}
            className={`bg-white shadow-lg p-4 rounded-2xl hover:bg-blue-100 transition transform hover:scale-105 ${
              selectedMood === label ? 'border-4 border-blue-500' : ''
            }`}
          >
            <div className="text-4xl">{emoji}</div>
            <div className="text-sm mt-2">{label}</div>
          </button>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleBack}
          className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
