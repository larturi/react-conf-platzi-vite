/* eslint-disable max-len */

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button-v2'
import AppContext from '../../context/AppContext'

import './Payment.css'

export const Payment = () => {
  const { state } = useContext(AppContext)
  const { cart, buyer, addNewOrder } = state

  console.log(import.meta.env.VITE_PAYPAL_CLIENTID)

  const navigate = useNavigate()

  const paypalOptions = {
    clientId: import.meta.env.PAYPAL_CLIENTID || '',
    intent: 'capture',
    currency: 'USD',
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  const handlePaymentSuccess = (data) => {
    console.log(import.meta.env.PAYPAL_CLIENTID)
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      }
      addNewOrder(newOrder)
      navigate('/checkout/success')
    }
  }

  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del Pedido</h3>
        {cart.map((item) => (
          <div className="payment-item" key={item.id}>
            <div className="payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Iniciando pago')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  )
}
