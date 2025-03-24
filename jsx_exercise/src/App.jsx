import Greeting from "./components/Greeting"
import JSXRules from "./components/JSXRules"
import ProductInfo from "./components/ProductInfo"
import ProductList from "./components/ProductList"
import UserList from "./components/UserList"
import WelcomeMessage from "./components/WelcomeMessage"

const App = () => {
    // const numbers = [1, 2, 3, 4, 5]

    return (
        <div>
            {/* <WelcomeMessage /> */}
            {/* <JSXRules /> */}
            {/* <Greeting />
            <ProductInfo /> */}
            {/* {numbers.map((number) => (
                <ul key={number}>
                    <li>{number}</li>
                </ul>
            ))} */}
            <UserList />
            <ProductList />
        </div>
    )
}

export default App
