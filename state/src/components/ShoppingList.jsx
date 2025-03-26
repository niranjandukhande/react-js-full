import { useState } from "react"

const ShoppingList = () => {
    const [items, setItems] = useState([])
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !quantity) return

        setItems((prev) => [
            ...prev,
            { name: name, quantity: parseInt(quantity) },
        ])
        setName("")
        setQuantity("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Item: </label>
                <input
                    type="text"
                    placeholder="Enter Item's name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Price: </label>
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button type="submit">Click me</button>
            </form>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ShoppingList
