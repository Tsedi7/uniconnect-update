// src/App.js
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import KeyFeatures from './components/KeyFeatures';
import HowItWorks from './components/HowItWorks';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import LoginForm from './components/loginForm';

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsLoginFormOpen(false);
  };

  const handleLogout = () => {
    setUser(null); // Clear the user on logout
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <div>
      <NavBar 
        onLoginClick={() => setIsLoginFormOpen(true)} 
        onLogoutClick={handleLogout} 
        user={user} 
        isSearchOpen={isSearchOpen}
        toggleSearch={toggleSearch}
        closeSearch={closeSearch}
      />
      <HeroSection />
      <KeyFeatures /> 
      <HowItWorks />
      <ContactUs />
      <Footer />
      {isLoginFormOpen && (
        <div className="fixed inset-0 flex items-start justify-center z-20" style={{ top: '70px' }}>
          <div className="bg-white p-4 rounded shadow-lg w-full max-w-sm">
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>
      )}
      {user && <p className="text-center mt-4">Welcome, {user.username}!</p>}
    </div>
  );
};

export default App;
