import './Product.css'

export const Product = ({ product }) => {
  return (
    <div className="products-item">
      <img src={product.image} alt={product.title} />
      <div className="products-item-info">
        <h2>
          {product.title} <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button">Comprar</button>
    </div>
  )
}
