import React from 'react'
import { useNavigate } from 'react-router-dom'
function OrderConfirm() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Congratulations ! Your order confirmed.</h1>
        <button onClick={()=>navigate(-1)}>Go Back Dear !! </button>
    </div>
  )
}

export default OrderConfirm
