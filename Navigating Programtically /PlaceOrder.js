import React from 'react'
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={() => navigate('order-page')}>Place Order here !!</button>
    </div>
  )
}

export default PlaceOrder
