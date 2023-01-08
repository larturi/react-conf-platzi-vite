import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import AppContext from '../../context/AppContext'
import { handleSumTotal } from '../../utils/sumTotalOrder'
import { SEO } from '../Seo/Seo'

import './Checkout.css'

export const Checkout = () => {
  const { state, removeToCart } = useContext(AppContext)
  const { cart } = state

  const handleRemoveToCart = (product) => {
    removeToCart(product)
  }

  return (
    <>
      <SEO title="Platzi Conf Merch - Checkout" />

      <div className="checkout">
        <div className="checkout-content">
          {cart.length > 0 ? (
            <h3>Lista de Pedidos:</h3>
          ) : (
            <h3>No hay pedidos</h3>
          )}

          {cart.map((item) => (
            <div className="checkout-item" key={uuidv4()}>
              <div className="checkout-element">
                <h4>
                  {item.title} ({item.quantity})
                </h4>
                <span>${item.price * item.quantity}</span>
              </div>
              <button type="button" onClick={() => handleRemoveToCart(item)}>
                <i className="fas fa-trash-alt" title="Eliminar" />
              </button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="checkout-sidebar">
            <h3>{`Total a pagar: $${handleSumTotal(cart)}`}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
