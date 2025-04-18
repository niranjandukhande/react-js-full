import { useState } from "react"
import { useStore } from "../store/useStoreExpense"

const ExpenseTracker = () => {
  const { expenses, addExpense, removeExpense } = useStore()
  const [description, setDescription] = useState<string>("")
  const [amount, setAmount] = useState<number | "">("")

  const handleAddExpense = () => {
    if (description.trim() === "" || amount === "") return
    addExpense({
      id: Date.now(),
      description,
      amount: Number(amount),
    })
    setDescription("")
    setAmount("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-purple-700">
          Expense Tracker
        </h1>
        <div className="space-y-4 mb-6">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Expense Description"
            className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          />

          <input
            type="number"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder="Amount"
            className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          />

          <button
            onClick={handleAddExpense}
            className="bg-purple-600 text-white w-full px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Add Expense
          </button>

          <ul className="space-y-4 mb-6">
            {expenses.map((expense) => (
              <li
                key={expense.id}
                className="flex justify-between items-center bg-purple-100 p-4 rounded-lg shadow-sm transition-transform transform hover:scale-105"
              >
                <span className="text-gray-800 font-semibold">
                  {expense.description}:{" "}
                  <span className="text-purple-600">
                    ${expense.amount.toFixed(2)}
                  </span>
                </span>

                <button
                  onClick={() => removeExpense(expense.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-purple-700">
              Total Expenses:{" "}
              <span className="text-purple-600">
                $
                {expenses
                  .reduce((total, expense) => total + expense.amount, 0)
                  .toFixed(2)}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseTracker
