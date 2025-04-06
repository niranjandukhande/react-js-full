import { use } from "react"

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/2")
  return res.json()
}

const NewFetchTodo = () => {
  const data = use(fetchData())
  return (
    <div>
      <h1 className="bg-amber-200">{data.title}</h1>
    </div>
  )
}

export default NewFetchTodo
