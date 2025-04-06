import { Suspense } from "react"
// import FetchTodo from "./components/OldFetchTodo"
import NewFetchTodo from "./components/NewFetchTodo"

const App = () => {
  return (
    // <div>
    //   <FetchTodo />
    // </div>
    <Suspense fallback={<h2>Loading...</h2>}>
      <NewFetchTodo />
    </Suspense>
  )
}

export default App
