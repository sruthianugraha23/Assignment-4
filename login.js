
import React, { useState } from 'react';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // For demonstration purposes, always redirect to the home page after login
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
