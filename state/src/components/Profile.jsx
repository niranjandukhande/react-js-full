import { useState } from "react"

const Profile = () => {
    const [profile, setProfile] = useState({ name: "prog", age: 22 })

    const handleChange = (e) => {
        setProfile((prev) => ({
            ...prev,
            name: e.target.value,
        }))
    }

    return (
        <div>
            <h2>Name: {profile.name}</h2>
            <h2>Age: {profile.age}</h2>
            <input type="text" onChange={handleChange} />
        </div>
    )
}

export default Profile
