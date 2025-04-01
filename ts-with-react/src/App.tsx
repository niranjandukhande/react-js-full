import AdminInfo from "./components/AdminInfo";

import UserInfo from "./components/UserInfo";
import { AdminInfoList, InfoType } from "./types/types";

const App = () => {
  // const onClick = () => {
  //     alert("Button clicked")
  // }

  const user: InfoType = {
    id: 123,
    name: "Prog",
    email: "example@gmail.com",
  };

  const admin: AdminInfoList = {
    id: 456,
    name: "Solos",
    email: "solution@gmail.com",
    isAdmin: true,
  };

  return (
    <div>
      {/* <User name="prog" age={20} isStudent={true} /> */}
      {/* <User>
                <p>Hello</p>
            </User> */}

      {/* for functional component  */}
      {/* <User name="Prog" age={20} isStudent={true} /> */}

      {/* <Button label="click me" onClick={onClick} disabled={false} /> */}
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </div>
  );
};

export default App;
