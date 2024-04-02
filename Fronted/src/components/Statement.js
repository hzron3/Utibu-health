// Statement.js
// Component for user statement

import React, { useState, useEffect } from 'react';
import StatementService from '../services/StatementService';

const Statement = ({ userId }) => {
  const [statement, setStatement] = useState([]);

  useEffect(() => {
    async function fetchStatement() {
      try {
        const response = await StatementService.getUserStatement(userId);
        setStatement(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchStatement();
  }, [userId]);

  return (
    <div>
      <h2>Statement</h2>
      <ul>
        {statement.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Statement;
