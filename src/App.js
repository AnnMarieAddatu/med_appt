import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/Sign_Up/Sign_Up'; // Updated component name
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import { Landing_Page } from './Components/Landing_Page/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
       <Notification>
        <Routes>
          <Route path='/' element={<Landing_Page/>}/>
          <Route path="/Sign_Up" element={<SignUp />} /> 
          <Route path="/Login" element={<Login />} />
          <Route path="/instant-consultation" element={<InstantConsultation/>} />
        </Routes>
       </Notification>
      </BrowserRouter>
    </div>
  );
}

export default App;

