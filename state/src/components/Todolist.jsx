import { useState } from "react"

const Todolist = () => {
    const [todos, setTodos] = useState(["go to gym", "study", "watch movie"])
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (input) {
            setTodos([...todos, input])
            setInput("")
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div>
            <h1>TODOS:</h1>
            {todos.map((todo, index) => (
                <div key={index}>{todo}</div>
            ))}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    placeholder="Add a new todo"
                    onChange={handleChange}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default Todolist
