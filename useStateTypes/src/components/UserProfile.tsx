import { useState } from "react"

type UserType = {
  name: string
  age: number
  email: string
}

const UserProfile = () => {
  const [user, setUser] = useState<UserType>({
    name: "Prog",
    age: 22,
    email: "prog@email.com",
  })

  const updateName = (name: string) => {
    setUser((prev) => ({ ...prev, name }))
  }
  
  return (
    <div>
      <h1>User Profile</h1>
      <p>{user.name ? user.name : "Wait for user to type their name"}</p>
      <p>{user.age}</p>
      <p>{user.email}</p>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => updateName(e.target.value)}
      />
    </div>
  )
}

export default UserProfile
