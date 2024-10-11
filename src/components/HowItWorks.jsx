// src/components/HowItWorks.jsx
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-50" id="how-it-works">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8">How UniConnect Works</h2>

        {/* Steps */}
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-10 relative w-full max-w-xl group transition-transform duration-300">
              {/* Step Indicator (Dot) */}
              <div className="absolute left-0 flex items-center justify-center w-4 h-4 bg-[#5e208f] text-white rounded-full transition-transform duration-300 transform group-hover:scale-150" />
              {/* Vertical Line */}
              {index > 0 && (
                <div className="absolute border-l-2 border-gray-300 h-10" style={{ left: '1.5rem', top: '0' }} />
              )}
              {/* Step Content */}
              <div className="bg-white border border-[#5e208f] rounded-lg shadow-lg p-6 flex-1 text-left transition-transform duration-300 transform group-hover:translate-x-2 hover:shadow-xl group-hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-gray-800">{step.title}</h3>
                <p className="text-gray-600 line-clamp-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    title: 'Sign Up',
    description: 'Create your free UniConnect account and start your journey to academic and professional success.',
  },
  {
    title: 'Connect and Collaborate',
    description: 'Connect with like-minded students, faculty, and industry leaders to unlock the power of collaboration.',
  },
  {
    title: 'Explore Opportunities',
    description: 'Discover scholarships, internships, and collaborative projects to enhance your career.',
  },
  {
    title: 'Get Inspired',
    description: 'Engage in discussions and workshops that inspire innovative ideas and projects.',
  },
];

export default HowItWorks;
