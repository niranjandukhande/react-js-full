import { useRef } from "react"

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <input type="text" placeholder="focus here" ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Click to focus</button>
    </div>
  )
}

export default FocusInput
