// src/components/KeyFeatures.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGraduationCap, faBriefcase, faFlask } from '@fortawesome/free-solid-svg-icons';

const KeyFeatures = () => {
  return (
    <section className="py-12 bg-gray-100 text-center" id="key-features">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Key Features of UniConnect
      </h2>
      <div className="flex justify-center flex-wrap gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:translate-y-[-10px] hover:shadow-lg"
          >
            <FontAwesomeIcon icon={feature.icon} size="3x" className="text-[#5e208f]" />
            <h3 className="mt-6 mb-2 text-2xl text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const features = [
  {
    icon: faUsers,
    title: 'Collaboration Hub',
    description: 'Connect with peers and industry leaders.',
  },
  {
    icon: faGraduationCap,
    title: 'Scholarship Finder',
    description: 'Discover scholarship opportunities tailored for you.',
  },
  {
    icon: faBriefcase,
    title: 'Internship Opportunities',
    description: 'Access valuable internships to jumpstart your career.',
  },
  {
    icon: faFlask,
    title: 'Research Resources',
    description: 'Find resources to support your academic research.',
  },
];

export default KeyFeatures;
