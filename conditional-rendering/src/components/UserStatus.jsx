const UserStatus = ({ loggedIn, isAdmin }) => {
    return (
        <>
            {loggedIn && isAdmin && <div>Welcome, Admin</div>}
            {loggedIn && !isAdmin && <div>Welcome, User</div>}
        </>
    )
}

export default UserStatus
