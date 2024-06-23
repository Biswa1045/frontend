import React from 'react';
import DoctorCard from './DoctorCard';
import team1 from '../../team-1.jpg';
import Button2 from '../Button2';
const DoctorCardsSection = () => {
  return (
    <section className="p-6"> 
    <div className="text-center">
    <h2 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-3">Our Team</h2>
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Expert Doctor</h1>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <DoctorCard
          name="John Doe"
          department="Engineering Department"
          degree="Bachelor of Science"
          imgSrc={team1}
        />
        <DoctorCard
          name="Jane Smith"
          department="Biology Department"
          degree="PhD in Biology"
          imgSrc="https://via.placeholder.com/150"
        />
        <DoctorCard
          name="Michael Johnson"
          department="Physics Department"
          degree="Master of Science"
          imgSrc="https://via.placeholder.com/150"
        />
        <DoctorCard
          name="Emily Davis"
          department="Chemistry Department"
          degree="Bachelor of Chemistry"
          imgSrc="https://via.placeholder.com/150"
        />
      </div>
      <div className="flex justify-center mt-6">
        <Button2 text="See More"/>
      </div>
    </section>
  );
};

export default DoctorCardsSection;
