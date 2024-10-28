import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Navbar from '../pages/navbar/Navbar';
import Home from '../pages/home/Home';

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRouter