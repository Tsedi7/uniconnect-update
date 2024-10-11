import React, { useState } from 'react';

const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fetch user data from db.json and check if the credentials are correct
    try {
      const response = await fetch('http://localhost:5000/users');
      const users = await response.json();

      // Find the user by username and password
      const foundUser = users.find(user => user.username === username && user.password === password);

      if (foundUser) {
        // Call the onLoginSuccess prop function with the user profile
        onLoginSuccess(foundUser);
        setError(''); // Clear any errors
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      console.error('Error:', err); // Log error for debugging
      setError('An error occurred while logging in');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text" // Change input type to text for username
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 p-2 rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 p-2 rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />
      <button type="submit" className="bg-[#5e208f] text-white px-4 py-2 rounded hover:bg-[#4b0e67] transition">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
