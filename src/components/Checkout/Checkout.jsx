import './Checkout.css'

import { Link } from 'react-router-dom'

export const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-content">
        <h3>Lista de Pedidos</h3>
        <div className="checkout-item">
          <div className="checkout-element">
            <h4>Item Name</h4>
            <span>$54</span>
          </div>

          <button type="button">
            <i className="fas fa-trash-alt" title="Eliminar" />
          </button>
        </div>
      </div>

      <div className="checkout-sidebar">
        <h3>Total a pagar: $10</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  )
}
