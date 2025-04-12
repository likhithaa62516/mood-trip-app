import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MoodSelector from './components/MoodSelector';
import PlaceList from './components/PlaceList';
import Itinerary from './components/Itinerary';
import LogoScreen from './components/LogoScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogoScreen />} />
        <Route path="/mood" element={<MoodSelector />} />
        <Route path="/places" element={<PlaceList />} />
        <Route path="/itinerary" element={<Itinerary />} />
      </Routes>
    </Router>
  );
}

export default App;



// import React, { useState } from 'react';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import MoodSelector from './components/MoodSelector';
// import PlaceList from './components/PlaceList';
// import Itinerary from './components/Itinerary';
// import LogoScreen from './components/LogoScreen';

// function AppRoutes() {
//   const [mood, setMood] = useState(null);
//   const [selectedPlace, setSelectedPlace] = useState(null);

//   return (
//     <Routes>
//       <Route path="/" element={<LogoScreen />} />
//       <Route path="/mood" element={<MoodSelector setMood={setMood} />} />
//       <Route path="/places" element={<PlaceList mood={mood} selectPlace={setSelectedPlace} />} />
//       <Route path="/itinerary" element={<Itinerary place={selectedPlace} />} />
//     </Routes>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppRoutes />
//     </Router>
//   );
// }

// export default App;
