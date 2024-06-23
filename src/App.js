import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Navbar from './components/NavBar';
import Footer from './components/Footer';
import LoginPage from './pages/Login';
import AppointmentPage from './pages/Appointment';
import BookSection from'./components/BookSection'
import SignupPage from './pages/Signup';
import MemberDashboardPage from './pages/MemberDashboard';
import HomePage from './pages/Home';

const theme = {
  card_light: '#f8f9fa',
  text_primary: '#343a40',
  primary: '#242866',
  white: '#ffffff',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboardMember" element={<MemberDashboardPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
          </Routes>
        </div>
       <Footer></Footer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
