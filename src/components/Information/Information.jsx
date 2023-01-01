import './Information.css'

import { Link } from 'react-router-dom'

export const Information = () => {
  return (
    <div className="information">
      <div className="information-content">
        <div className="information-head">
          <h2>Información de contacto</h2>
        </div>

        <div className="information-form">
          <form action="">
            <input type="text" placeholder="Nombre Completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Telefono" name="phone" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Pais Completo" name="country" />
            <input type="text" placeholder="Provincia" name="state" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Codigo Postal" name="cp" />
          </form>
        </div>

        <div className="information-buttons">
          <div className="information-back">Regresar</div>
          <Link to="/checkout/payment">
            <div className="information-next">Pagar</div>
          </Link>
        </div>
      </div>

      <div className="information-sidebar">
        <h3>Pedido</h3>
        <div className="information-item">
          <div className="information-element">
            <h4>Item Name</h4>
            <span>$30</span>
          </div>
        </div>
      </div>
    </div>
  )
}
