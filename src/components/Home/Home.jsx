/* eslint-disable max-len */

import initialState from '../../initialState'
import { Products } from '../Products/Products'
import { SEO } from '../Seo/Seo'

export const Home = () => {
  return (
    <>
      <SEO title="Platzi Conf Merch - Products" />
      <Products products={initialState.products} />
    </>
  )
}
