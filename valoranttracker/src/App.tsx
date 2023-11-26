import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Agents from './pages/Agents';
import Landing from './pages/Landing';
import Maps from './pages/Maps';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  return (
    <Router>
      <div className='w-full h-fit select-none'>
        <BackgroundMusic />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Agents" element={<Agents />} />
          <Route path="/Maps" element={<Maps />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
