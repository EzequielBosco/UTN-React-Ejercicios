import ProductCard from './ProductCard'
import { useState } from 'react'

const ProductContainer = () => {
  const [product, setProduct] = useState({ id: 1, name: 'Producto 1', description: 'Descripción del Producto 1', price: 10, SKU: "OBJETO1-COLOR-MARCA", stock: 50 })

  const [purchaseComplete, setPurchaseComplete] = useState(false)

  const handleClick = () => {
    console.log(`¡Gracias por su compra!`)
    setPurchaseComplete(true)
    setTimeout(() => {
      window.location.href = "/"
    }, 2000)
  }

  return (
    <div>
      {!purchaseComplete ? (
        <>
          <h1>Detalle Producto</h1>
          <ProductCard
            name={product.name}
            description={product.description}
            price={product.price}
            SKU={product.SKU}
            stock={product.stock}
            onClick={handleClick} 
          />
          </>
        ) : (
          <p>¡Gracias por su compra!</p>
      )}
    </div>
  )
}

export default ProductContainer