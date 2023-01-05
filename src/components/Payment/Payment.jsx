/* eslint-disable max-len */

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PayPalButtons } from '@paypal/react-paypal-js'
import AppContext from '../../context/AppContext'

import './Payment.css'
import { handleSumTotal } from '../../utils/sumTotalOrder'

export const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext)
  const { cart, buyer } = state

  const navigate = useNavigate()

  const handlePaymentSuccess = (details) => {
    console.log(details)
    if (details.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: details,
      }
      addNewOrder(newOrder)
      navigate('/checkout/success')
    }
  }

  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className="payment-item" key={item.title}>
            <div className="payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="payment-button">
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: handleSumTotal(cart).toString(),
                    },
                  },
                ],
              })
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                handlePaymentSuccess(details)
              })
            }}
          />
        </div>
      </div>
    </div>
  )
}
