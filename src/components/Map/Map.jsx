/* eslint-disable max-len */

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { getLatLng } from '../../utils/getLatLongByAddress'
import './Map.css'

// const position = [51.505, -0.09]

const ChartMap = ({ address }) => {
  const [position, setPosition] = useState(null)

  useEffect(() => {
    getLatLng(address).then((position) => setPosition(position))
  }, [])

  return (
    position && (
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          {/* <Popup icon={Icon}>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup> */}
        </Marker>
      </MapContainer>
    )
  )
}
export default ChartMap
