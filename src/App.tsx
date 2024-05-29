import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import HOME from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HOME />} />
      </Routes>
    </Router>

  );
}

export default App;
