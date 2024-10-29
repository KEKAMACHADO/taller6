import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Navbar from '../pages/navbar/Navbar';
import Home from '../pages/home/Home';
import CatList from '../pages/CatList';
import DogList from '../pages/DogList';


function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cats" element={<CatList />} />
        <Route path="/dogs" element={<DogList />} />

      </Routes>
    </Router>
  );
}

export default AppRouter
