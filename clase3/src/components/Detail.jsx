import Item from './Item'

const ItemContainer = () => {
  const item = { id: 1, name: 'Nike Air Max 90', description: 'Zapatillas deportivas', price: 100, SKU: "57849-BLANCO-NIKE", stock: 10 }

  return (
    <>
      <h1>Detalle Producto</h1>
      <Item
        name={item.name}
        description={item.description}
        price={item.price}
        SKU={item.SKU}
        stock={item.stock}
      />
    </>
  )
}

export default ItemContainer