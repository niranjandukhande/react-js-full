import { useReducer } from "react"
import { counterReducer, CounterState } from "../reducers/counterReducer"

const initialState: CounterState = { count: 0 }

const CounterExample = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState)
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  )
}

export default CounterExample
