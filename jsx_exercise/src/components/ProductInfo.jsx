const ProductInfo = () => {
    const product = { name: "Laptop", price: 1200, availabitlity: "In stock" }
    return (
        <div>
            <h2>Product's name = {product.name}</h2>
            <h2>Product's price = ${product.price}</h2>
            <h2>Is Available = {product.availabitlity}</h2>
        </div>
    )
}

export default ProductInfo
