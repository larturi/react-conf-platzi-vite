/* eslint-disable max-len */

export const getLatLng = async (address) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(
      address
    )}`
  )
  const data = await response.json()
  return data.length > 0 ? [Number(data[0].lat), Number(data[0].lon)] : null
}
