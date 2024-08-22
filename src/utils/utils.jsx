// src/utils/utils.js

export const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validatePassword = (password) => {
    // Ensure password is at least 6 characters
    return password.length >= 6;
  };
  
  // Mock user database
  const users = [
    { email: "user@example.com", password: "password123" }
  ];
  
  export const checkUserCredentials = (email, password) => {
    return users.find(
      (user) => user.email === email && user.password === password
    );
  };
  
  export const isEmailTaken = (email) => {
    return users.some((user) => user.email === email);
  };
  
  export const registerUser = (name, email, password, country, city) => {
    if (isEmailTaken(email)) {
      return false;
    }
    users.push({ name, email, password, country, city });
    return true;
  };
  