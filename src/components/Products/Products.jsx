import { Product } from '../Product/Product'

import './Products.css'

export const Products = ({ products }) => {
  console.log(products)
  return (
    <div className="products">
      <div className="products-items">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
