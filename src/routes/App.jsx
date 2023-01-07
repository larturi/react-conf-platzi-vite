import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import {
  Checkout,
  Information,
  NotFound,
  Payment,
  Success,
  Home,
} from '../components'

import { Layout } from '../components/Layout/Layout'

import AppContext from '../context/AppContext'
import useInitalState from '../hooks/useInitialState'

const App = () => {
  const initialState = useInitalState()
  return (
    <AppContext.Provider value={initialState}>
      <PayPalScriptProvider
        options={{
          'client-id': import.meta.env.VITE_PAYPAL_CLIENTID || '',
        }}
      >
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/information" element={<Information />} />
              <Route path="/checkout/payment" element={<Payment />} />
              <Route path="/checkout/success" element={<Success />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </PayPalScriptProvider>
    </AppContext.Provider>
  )
}

export default App
