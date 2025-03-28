import React, { useReducer, useState } from "react"
import { initialState, counterReducer } from "../counterReducer.js"

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    const [inputValue, setInputValue] = useState(0)

    const handleClick = () => {
        dispatch({ type: "incrementByAmount", payload: Number(inputValue) })
        setInputValue(0)
    }

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>
                Plus
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
                Minus
            </button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <button
                onClick={() => {
                    dispatch({ type: "incrementBy10" })
                }}
            >
                Increment by 10
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "decrementBy10" })
                }}
            >
                Decrement by 10
            </button>
            <div>
                <input
                    type="number"
                    value={inputValue}
                    placeholder="Enter Value"
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleClick}>Increment By Custom Value</button>
            </div>
        </div>
    )
}

export default Counter
