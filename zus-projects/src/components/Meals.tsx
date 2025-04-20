import { useEffect } from "react"
import { useStore } from "../store/useStoreMeals"

const Meals = () => {
  const { meals, searchQuery, setMeals, setSearchQuery } = useStore()

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        )
        const data = await response.json()
        setMeals(data.meals)
        console.log(data.meals[0])
      } catch (error) {
        console.error("Error fetching Data", error)
      }
    }
    fetchMeals()
  }, [setMeals])

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-teal-600">SeaFood Recipes</h1>
      <input
        type="text"
        placeholder="Search for a meal..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-teal-400 rounded-lg p-3 mb-8 w-96 text-center focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      <div>
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />

              <h2 className="text-xl font-semibold text-teal-700 mb-2">
                {meal.strMeal}
              </h2>

              <p className="text-gray-600 text-sm">Delicious Seafood Meal</p>
            </div>
          ))
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
  )
}

export default Meals
