import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Checkout,
  Information,
  NotFound,
  Payment,
  Success,
  Home,
} from '../components'

import { Layout } from '../components/Layout/Layout'

const App = () => {
  return (
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
  )
}

export default App
