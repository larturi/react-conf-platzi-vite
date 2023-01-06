import { useContext, useEffect } from 'react'
import AppContext from '../../context/AppContext'
import { Product } from '../Product/Product'

import './Products.css'

export const Products = () => {
  const { state, addToCart } = useContext(AppContext)
  const { products, cart } = state

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <div className="products">
      <div className="products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  )
}
