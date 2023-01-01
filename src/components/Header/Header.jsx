import './Header.css'

import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" title="Checkout" />
        </Link>
      </div>
    </div>
  )
}
