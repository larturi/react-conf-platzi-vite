import { Footer, Header } from '..'

import './Layout.css'

export const Layout = ({ children }) => {
  return (
    <div className="main">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
