// const ValidPassword = () => <div>Valid</div>

import Greeting from "./components/Greeting"
import UserStatus from "./components/UserStatus"
import Weather from "./components/Weather"

// const InvalidPassword = () => <div>Invalid</div>

// const Password = ({ isValid }) =>
//     isValid ? <ValidPassword /> : <InvalidPassword />

const App = () => {
    return (
        <>
            {/* <Password isValid={true} /> */}
            <Weather temperature={3} />
            <UserStatus loggedIn={true} isAdmin={true} />
            <Greeting timeOfDay="morning" />
        </>
    )
}

export default App
