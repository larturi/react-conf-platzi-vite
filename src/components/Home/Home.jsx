import initialState from '../../initialState'
import { Products } from '../Products/Products'

export const Home = () => {
  return <Products products={initialState.products} />
}
