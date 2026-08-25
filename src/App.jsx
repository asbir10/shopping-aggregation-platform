// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import LoginPage from './components/Loginpage';
import SignUpPage from './components/Signup';
import AdminDashboard from './components/Admin';
import OrderPortal from './components/Orderportal';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/t" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/o" element={<OrderPortal />} />

        {/* You can add more routes here as your app grows */}
      </Routes>
    </Router>
  );
}

export default App;
