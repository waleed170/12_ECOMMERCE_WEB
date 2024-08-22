// src/components/SignUp/SignUp.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword, isEmailTaken, registerUser } from "../../utils/utils";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the email format
    if (!validateEmail(email)) {
      setError("Invalid email address.");
      return;
    }

    // Validate the password length
    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Ensure all fields are filled out
    if (!name || !country || !city) {
      setError("All fields are required.");
      return;
    }

    // Check if the email is already taken
    if (isEmailTaken(email)) {
      setError("Email is already taken.");
      return;
    }

    // Register the user
    const registrationSuccess = registerUser(name, email, password, country, city);

    if (registrationSuccess) {
      setSuccess("Registered successfully!");
      setError("");
      setTimeout(() => navigate("/"), 2000);
    } else {
      setError("Registration failed. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-primary text-white rounded hover:bg-primary-dark transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
