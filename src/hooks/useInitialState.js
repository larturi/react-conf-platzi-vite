import { useState } from 'react'
import initialState from '../initialState'

const useInitalState = () => {
  const [state, setState] = useState(initialState)

  const setCartFromLocalStorage = (payload) => {
    setState({
      ...state,
      cart: [...payload],
    })
  }

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    })
  }

  const removeToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    })
  }

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    })
  }

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    })
  }

  const incrementProductQuantity = (payload) => {
    const product = state.cart.find((product) => {
      return product.id === payload
    })
    if (product) {
      product.quantity += 1
    }

    setState({
      ...state,
    })
  }

  return {
    addToCart,
    addToBuyer,
    removeToCart,
    addNewOrder,
    incrementProductQuantity,
    setCartFromLocalStorage,
    state,
  }
}

export default useInitalState
