import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PlaceList() {
  const location = useLocation();
  const navigate = useNavigate();
  const mood = location.state?.mood;

  // Redirect if mood is not selected (e.g., direct access)
  if (!mood) {
    navigate('/mood');
    return null;
  }

  const [selectedPlace, setSelectedPlace] = useState('');

  const places = {
    Happy: ["Goa", "Rishikesh", "Jaipur", "Pondicherry", "Mysore"],
    Sad: ["Coorg", "Alleppey", "Tawang", "Pushkar", "Gokarna"],
    Angry: ["Rishikesh", "Manali", "Ziro Valley", "Lonavala", "Spiti Valley"],
    Calm: ["Munnar", "Auroville", "Kumarakom", "Lansdowne", "Pachmarhi"],
    Confused: ["Udaipur", "Mahabalipuram", "Ooty", "Gangtok", "Shillong"],
    Adventurous: ["Leh-Ladakh", "Cherrapunji", "Andaman Islands", "Rann of Kutch", "Bir Billing"],
    Tired: ["Kasol", "Alibaug", "Mount Abu", "Chikmagalur", "Yelagiri"]
  };

  const currentPlaces = places[mood] || [];

  const handleNext = () => {
    if (selectedPlace) {
      navigate('/itinerary', { state: { mood, place: selectedPlace } });
    } else {
      alert('Please select a place before continuing!');
    }
  };

  const handleBack = () => {
    navigate('/mood');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#E0F2FE] text-center px-4">
      <h2 className="text-3xl font-bold text-orange-800 mb-6">Recommended Places for "{mood}" Mood</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {currentPlaces.map((place, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg transition font-semibold ${
              selectedPlace === place
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-800 border-2 border-blue-300 hover:bg-blue-100'
                //  ? 'bg-orange-600 text-white'
                // : 'bg-white text-gray-800 border-2 border-orange-300 hover:bg-orange-100'
            }`}
            onClick={() => setSelectedPlace(place)}
          >
            {place}
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
          // className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
