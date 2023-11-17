import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/categories/Categories';
import Doctors from './components/doctors/Doctors';
import Footer from './components/Footer';
import './App.css'; // Import the CSS file for styling

function App() {
  const [categories, setCategories] = useState('Dentist');

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Categories categories={categories} setCategories={setCategories} />} />
          <Route path="/doctors" element={<Doctors categories={categories} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
