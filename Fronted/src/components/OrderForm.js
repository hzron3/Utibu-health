// OrderForm.js
// Component for medication order form

import React, { useState } from 'react';
import OrderService from '../services/OrderService';

const OrderForm = () => {
  const [medication, setMedication] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleOrder = async () => {
    try {
      const response = await OrderService.placeOrder(medication, quantity);
      console.log(response);
      // Redirect or perform actions after successful order placement
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Medication" value={medication} onChange={(e) => setMedication(e.target.value)} />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default OrderForm;
