// src/pages/DashboardPage.js
import React from 'react';
import MenuBar from '../components/NavBar';
import Hero from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CardComponent from'../components/BookSection'
import ServicesSection from '../components/ServicesSection'
import DoctorSection from '../components/DoctorSection'
import EmergencySection from '../components/EmergencySection'
export default function DashboardPage() {
    return (
        <>
           
           <MenuBar />
                <div className="m">
                    
                    <Hero />
                    <div className="container mx-auto p-4">
                   
                    </div>
                    <AboutSection/>
                    <ServicesSection></ServicesSection>
                    <CardComponent/>
                    <DoctorSection/>
                    <EmergencySection/>
                </div>
            
        </>
    );
}
