import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import ChartMap from '../Map/Map'

import './Success.css'

export const Success = () => {
  const { state } = useContext(AppContext)
  const { buyer } = state

  return (
    <div className="success">
      <div className="success-content">
        <h2>{`${buyer[0].name}, gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>

        <div className="success-map">
          <ChartMap address={buyer[0].address} />
        </div>
      </div>
    </div>
  )
}
