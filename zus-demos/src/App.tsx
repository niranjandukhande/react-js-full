import OtherComponent from "./OtherComponent"
import { useCounter } from "./store"

const App = () => {
  const { count } = useCounter()
  return (
    <div>
      <h1>Count: {count}</h1>
      <OtherComponent />
    </div>
  )
}

export default App
