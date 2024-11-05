import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
