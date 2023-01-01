import './Checkout.css'

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

          <button type="button">Eliminar</button>
        </div>
      </div>

      <div className="checkout-sidebar">
        <h3>Total a pagar: $10</h3>
        <button type="button">Continuar pedido</button>
      </div>
    </div>
  )
}
