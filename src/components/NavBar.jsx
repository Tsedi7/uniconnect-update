// src/components/NavBar.js
import React from 'react';
import { FiSearch } from 'react-icons/fi'; // Search icon
import { AiOutlineClose } from 'react-icons/ai'; // Close icon

const NavBar = ({ user, onLogoutClick, onLoginClick, onSearch, isSearchOpen, toggleSearch, closeSearch }) => {
  const sections = user ? (
    <div className="flex space-x-8">
      <a href="/about" className="text-[#5e208f] hover:underline">About Us</a>
      <a href="/scholarships" className="text-[#5e208f] hover:underline">Scholarships</a>
      <a href="/internships" className="text-[#5e208f] hover:underline">Internships</a>
      <a href="/blogs" className="text-[#5e208f] hover:underline">Blogs</a>
      <a href="/researches" className="text-[#5e208f] hover:underline">Researches</a>
      <a href="/news" className="text-[#5e208f] hover:underline">News</a>
    </div>
  ) : null;

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 transition duration-500 ease-in-out">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div>
          <a href="/" className="text-2xl font-bold text-[#5e208f]">UniConnect</a>
        </div>

        {/* Centered Sections */}
        <div className="flex-grow flex justify-center space-x-4">
          {sections}
        </div>

        {/* Search Bar and Icon */}
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <button onClick={toggleSearch} className="text-gray-700 focus:outline-none hover:text-[#5e208f] transition duration-300">
              <FiSearch className="text-2xl" />
            </button>

            {isSearchOpen && (
              <div className="absolute top-10 right-0 w-[400px] bg-white border border-gray-300 rounded-lg p-2 shadow-lg transition transform duration-300 ease-in-out">
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-[#5e208f] text-black transition duration-300"
                />
                <button onClick={closeSearch} className="ml-2 text-gray-700 hover:text-[#5e208f] focus:outline-none transition duration-300">
                  <AiOutlineClose className="text-2xl" />
                </button>
              </div>
            </div>
            
            
            )}
          </div>

          {/* Login/Logout and Username Display */}
          {user ? (
            <>
              <span className="text-[#5e208f]">Welcome, {user.username}!</span>
              <button onClick={onLogoutClick} className="border border-[#5e208f] text-[#5e208f] px-4 py-2 rounded-lg hover:bg-[#440f69] hover:text-white transition duration-300">
                Logout
              </button>
            </>
          ) : (
            <button onClick={onLoginClick} className="border border-[#5e208f] text-[#5e208f] px-4 py-2 rounded-lg hover:bg-[#440f69] hover:text-white transition duration-300">
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
