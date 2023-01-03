import { useState } from 'react'
import initialState from '../initialState'

const useInitalState = () => {
  const [state, setState] = useState(initialState)

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

  return {
    addToCart,
    addToBuyer,
    removeToCart,
    addNewOrder,
    state,
  }
}

export default useInitalState
