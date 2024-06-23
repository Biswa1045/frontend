// src/pages/DashboardPage.js
import React from 'react';
import MenuBar from '../components/NavBar';
import Hero from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import BookSection from'../components/BookSection'
import ServicesSection from '../components/ServicesSection'
import DoctorSection from '../components/DoctorSection'
import EmergencySection from '../components/EmergencySection'
export default function AppointmentPage() {
    return (
        <>
           
           <MenuBar />
                <div className="m">
                    
                    <BookSection/>
                    <EmergencySection/>
                </div>
            
        </>
    );
}
