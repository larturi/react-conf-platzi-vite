import { useContext, useEffect } from 'react'
import AppContext from '../../context/AppContext'
import { Product } from '../Product/Product'

import './Products.css'

export const Products = () => {
  const { state, addToCart, incrementProductQuantity } = useContext(AppContext)
  const { products, cart } = state

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const productExistsInCart = (cart, productId) => {
    return cart.some((product) => {
      return product.id === productId
    })
  }

  const getProductFromCart = (cart, productId) => {
    return cart.find((product) => {
      return product.id === productId
    })
  }

  const handleAddToCart = (product) => {
    // Si el producto ya esta en el carrito, sumo uno en quantity
    if (productExistsInCart(cart, product.id)) {
      const productInCart = getProductFromCart(cart, product.id)
      incrementProductQuantity(productInCart.id)
    } else {
      const productToCart = { ...product, quantity: 1 }
      addToCart(productToCart)
    }
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
