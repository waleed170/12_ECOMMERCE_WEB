// src/components/Login/Login.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword, checkUserCredentials } from "../../utils/utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const user = checkUserCredentials(email, password);

    if (user) {
      setSuccess("Logged in successfully!");
      setError("");
      setTimeout(() => navigate("/"), 2000);
    } else {
      setError("Invalid email or password.");
      setSuccess("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
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
        <button
          type="submit"
          className="w-full py-2 bg-primary text-white rounded hover:bg-primary-dark transition duration-300"
        >
          Login
        </button>
        <p className="mt-4">
          Don't have an account? <a href="/signup" className="text-primary">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
