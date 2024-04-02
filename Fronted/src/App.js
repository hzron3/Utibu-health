// App.js
// Main component for the application

import React from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import OrderForm from './components/OrderForm';
import Statement from './components/Statement';

const App = () => {
  return (
    <div>
      <h1>Utibu Health</h1>
      <LoginForm />
      <RegisterForm />
      <OrderForm />
      <Statement userId="user_id_here" />
    </div>
  );
};

export default App;
