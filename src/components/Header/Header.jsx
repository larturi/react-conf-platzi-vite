import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'

import './Header.css'

export const Header = () => {
  const { state, setCartFromLocalStorage } = useContext(AppContext)
  const { cart } = state

  useEffect(() => {
    const localStorageCart = JSON.parse(localStorage.getItem('cart'))
    if (localStorageCart.length > 0) setCartFromLocalStorage(localStorageCart)
  }, [])

  return (
    <div className="header">
      <h1 className="header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" title="Checkout" />
        </Link>
        {cart.length > 0 && <div className="header-alert">{cart.length}</div>}
      </div>
    </div>
  )
}
