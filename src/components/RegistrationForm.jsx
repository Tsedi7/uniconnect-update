import React, { useState } from 'react';

const RegistrationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        // Register the user
        const response = await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Error registering user');
        }

        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data));

        // Automatically log in the user
        await loginUser(formData.username, formData.password);

        // Show success message
        setSubmitted(true);

        // Close the form after a brief delay
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 3000);
      } catch (error) {
        console.error('Error registering user:', error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  const loginUser = async (username, password) => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Error logging in user');
      }

      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
      console.error('Error logging in user:', error);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) errors.password = 'Password is required';
    return errors;
  };

  return (
    <div className="mt-10 bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Create an Account</h2>
      {submitted ? (
        <div className="bg-green-500 text-white p-4 rounded mb-4 flex items-center">
          <span role="img" aria-label="welcome" className="text-2xl mr-2">🎉</span>
          <p>Successfully created your UniConnect account! Welcome! 🌟</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border rounded text-black w-full py-2 px-3"
              required
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded text-black w-full py-2 px-3"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border rounded text-black w-full py-2 px-3"
              required
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded">
              Create Account
            </button>
            <button type="button" onClick={onClose} className="text-gray-500 hover:underline">
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
