import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';

import Home from './Landing Page/HomePage';
import Navbar from './Components/Navbar';
import Footer from './Footer/Footer';
import Error from './Error/Error';
import ForgotPassword from './Login/ForgotPassword';
import Admin from './Admin/Admin';
import Signup from './Login/Signup';
import DetailsPages from './DetailsPage.jsx/DetailsPages';
 // Import your Login component here

function App() {
  return (
    <>
     {/* <Navbar/> */}
      <Router>
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Login/>} /> {/* Render Login component when URL matches '/' */}
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/error" element={<Error/>} />
          <Route path="/forgot" element={<ForgotPassword/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/details" element={<DetailsPages/>} />
        </Routes>
      </Router>
      {/* <Error/> */}
    </>
  );
}

export default App;
