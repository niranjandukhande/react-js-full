import React from "react"
import { useRef } from "react"

const FocusInput = () => {
    const inputRef = useRef(null)

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus()
            inputRef.current.value = "PROG"
        }
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={() => focusInput()}>
                Click Me to focus on the input and fill the name "PROG"
            </button>
        </div>
    )
}

export default FocusInput
