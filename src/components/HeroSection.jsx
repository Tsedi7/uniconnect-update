import React, { useState } from 'react';
import BackgroundImage from '../assets/cambridge.avif';
import LatestNews from './LatestNews';
import RegistrationForm from './RegistrationForm';

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to control form visibility

  const handleFormClose = () => {
    setIsFormOpen(false); // Close the form
  };

  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Connect, Collaborate, and Succeed with UniConnect
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
            UniConnect bridges the gap between students and opportunities, providing access to scholarships, internships, and a collaborative network.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => {
                setIsFormOpen(true); // Open the registration form
              }}
              className="bg-[#5e208f] text-white py-2 px-6 rounded-lg hover:bg-[#440f69] transition duration-300 cursor-pointer"
            >
              Get Started
            </button>
            <button
              onClick={() => {
                // Use scroll behavior to go to the key-features section
                const element = document.getElementById("key-features");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
                }
              }}
              className="bg-white text-purple-600 py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300 cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Registration Form */}
        {isFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
              <RegistrationForm onClose={handleFormClose} />
            </div>
          </div>
        )}
      </div>

      {/* Latest News Section */}
      <LatestNews /> {/* Include LatestNews component here */}
    </>
  );
};

export default HeroSection;
