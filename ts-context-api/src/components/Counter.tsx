import { FC, useContext } from "react"
import { MyContext } from "../context/MyContext"

const Counter: FC = () => {
  const { count, increment, decrement } = useContext(MyContext)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter
