import { useActionState } from "react"

async function increment(previousState: any, formData: any) {
  console.log(formData.get("name"))
  return previousState + 1
}

const Count = () => {
  const [state, formAction] = useActionState(increment, 0) // (function,initialState)
  return (
    <form>
      <h1>{state}</h1>
      <button formAction={formAction}>Increment</button>
      <br />
      <input type="text" placeholder="Enter your name" name="name" />
    </form>
  )
}

export default Count
