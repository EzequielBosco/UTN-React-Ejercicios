import "./product.css"

const ProductCard = ({ name, description, price, SKU, stock, onClick }) => {

  return (
    <div className="card-product">
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p>Descripción: {description}</p>
        <span>Precio: ${price} </span>
        <span>SKU: {SKU} </span>
        <p>Cantidad Disponible: {stock}</p>
        <button className="btn" type="submit" onClick={onClick}>Comprar</button>
      </div>
    </div>
  )
}

export default ProductCard