const ProductList = () => {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
    ]

    return (
        <>
            {products.map(({ id, name, price }) => (
                <div key={id}>
                    <h3>Product's Name: {name}</h3>
                    <h3>Product's Price: {price}</h3>
                </div>
            ))}
        </>
    )
}

export default ProductList
