import React from 'react';
import Card from '../card'; // Assuming you have a Card component defined

const ServicesSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-200 to-purple-100 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
        <div className="flex overflow-x-auto">
         
          <div className="flex space-x-8 p-8 overflow-x-auto scrollbar-hide">
            <Card title="Card 1" text="Some quick example text for Card 1." imageUrl="https://via.placeholder.com/300" />
            <Card title="Card 2" text="Some quick example text for Card 2." imageUrl="https://via.placeholder.com/300" />
            <Card title="Card 3" text="Some quick example text for Card 3." imageUrl="https://via.placeholder.com/300" />
            <Card title="Card 4" text="Some quick example text for Card 4." imageUrl="https://via.placeholder.com/300" />
            <Card title="Card 5" text="Some quick example text for Card 5." imageUrl="https://via.placeholder.com/300" />
           
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
