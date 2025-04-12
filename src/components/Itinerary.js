// src/components/Itinerary.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import itineraryData from '../data/itineraryData';
import L from 'leaflet';

const moodEmojis = {
  Happy: '😊',
  Sad: '😢',
  Angry: '😡',
  Calm: '😌',
  Confused: '😕',
  Adventurous: '😎',
  Tired: '😴',
};

const Itinerary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mood, place } = location.state || {};

  const activities = itineraryData[place] || [];
  const emoji = moodEmojis[mood] || '';
  const center = activities[0]?.coords || [26.9124, 75.7873];

  const locationIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -35],
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white p-6">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">
        {emoji} Your {mood} trip to {place}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map */}
        <div className="h-[450px] w-full">
          <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {activities.map((item, index) => (
              <Marker key={index} position={item.coords} icon={locationIcon}>
                <Popup>
                  <strong>{item.time}</strong>
                  <br />
                  {item.activity}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Itinerary List */}
        <div className="grid gap-4">
          {activities.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300"
            >
              <p className="text-sm text-gray-600 font-semibold">{item.time}</p>
              <p className="text-lg font-medium">{item.activity}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
};

export default Itinerary;

