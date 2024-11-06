// frontend/src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      {/* Route publique */}
      <Route path="/" element={<Landing />} />

      {/* Route protégée par PrivateRoute */}
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
