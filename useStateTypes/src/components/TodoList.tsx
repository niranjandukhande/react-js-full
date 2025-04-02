import { useState } from "react"

interface TODO {
  task: string
  completed: boolean
}

const TodoList = () => {
  const [todos, setTodos] = useState<TODO[]>([
    { task: "Go to Gym", completed: false },
  ])

  const addTodo = (task: string) => {
    // const newTodo: TODO = {
    //   task: task,
    //   completed: false,
    // }
    setTodos((prev) => [...prev, { task, completed: false }])
  }

  return (
    <div>
      <h1>TODOS:</h1>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo.task}
          {todo.completed ? " Completed" : " Not Completed"}
        </div>
      ))}

      <input type="text" placeholder="Todo Name" />
      <button onClick={() => addTodo("GYM")}>Add Todo</button>
    </div>
  )
}

export default TodoList
