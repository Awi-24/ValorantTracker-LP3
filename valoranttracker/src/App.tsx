import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Agents from './pages/Agents';
import Landing from './pages/Landing';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  return (
    <Router>
      <div className='w-full h-fit'>
        <BackgroundMusic />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Agents" element={<Agents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
