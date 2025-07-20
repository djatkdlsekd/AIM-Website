import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Project from './pages/Project';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/project" element={<Project />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
