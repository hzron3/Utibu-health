// RegisterForm.js
// Component for registration form

import React, { useState } from 'react';
import AuthService from '../services/AuthService';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await AuthService.register(username, password);
      console.log(response);
      // Redirect or perform actions after successful registration
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterForm;
