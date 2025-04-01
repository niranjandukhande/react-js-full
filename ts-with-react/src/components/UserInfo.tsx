import { InfoType } from "../types/types"

type UserInfoProp = {
    user: InfoType
}

const UserInfo = ({ user }: UserInfoProp) => {
    return (
        <div>
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
        </div>
    )
}

export default UserInfo
