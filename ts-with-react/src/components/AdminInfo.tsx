import { AdminInfoList } from "../types/types"

type AdminInfoProp = {
    admin: AdminInfoList
}

const AdminInfo = ({ admin }: AdminInfoProp) => {
    return (
        <div>
            <h1>{admin.name}</h1>
            <h1>{admin.id}</h1>
            <h1>{admin.email}</h1>
            {admin.isAdmin ? <h1>Admin</h1> : <h1>Not Admin</h1>}
        </div>
    )
}

export default AdminInfo
