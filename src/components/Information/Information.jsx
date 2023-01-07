import { useContext, useRef } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import { SEO } from '../Seo/Seo'

import './Information.css'

export const Information = () => {
  const { state, addToBuyer } = useContext(AppContext)
  const { cart } = state
  const form = useRef(null)
  const navigate = useNavigate()

  const handleSubmit = () => {
    const formData = new FormData(form.current)

    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      country: formData.get('country'),
      state: formData.get('state'),
      city: formData.get('city'),
      cp: formData.get('cp'),
    }

    addToBuyer(buyer)
    navigate('/checkout/payment')
  }

  return (
    <>
      <SEO title="Platzi Conf Merch - Checkout - Información de Contacto" />

      <div className="information">
        <div className="information-content">
          <div className="information-head">
            <h2>Información de contacto</h2>
          </div>

          <div className="information-form">
            <form ref={form}>
              <input type="text" placeholder="Nombre Completo" name="name" />
              <input
                type="text"
                placeholder="Correo Electronico"
                name="email"
              />
              <input type="text" placeholder="Telefono" name="phone" />
              <input type="text" placeholder="Direccion" name="address" />
              <input type="text" placeholder="Pais Completo" name="country" />
              <input type="text" placeholder="Provincia" name="state" />
              <input type="text" placeholder="Ciudad" name="city" />
              <input type="text" placeholder="Codigo Postal" name="cp" />
            </form>
          </div>

          <div className="information-buttons">
            <div className="information-back">
              <Link to="/checkout">Regresar</Link>
            </div>
            <div className="information-next">
              <button type="button" onClick={handleSubmit}>
                Pagar
              </button>
            </div>
          </div>
        </div>

        <div className="information-sidebar">
          <h3>Pedido</h3>
          {cart.map((item) => (
            <div className="information-item" key={item.id}>
              <div className="information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
