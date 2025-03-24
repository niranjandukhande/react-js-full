import Card from "./components/Card"
import Person from "./components/Person"
import Product from "./components/Product"

const App = () => {
    return (
        <div>
            {/* <User
            name="Prog"
            age={22}
            isMarried={false}
            hobbies={["coding", "gaming", "sleeping"]}
        /> */}
            {/* <Person name="Prog" age={22} />
            <Product name="PC" price={1200} /> */}
            <Card>
                <h1>Hello</h1>
                <p>This is the children, being passed to the Card Component</p>
            </Card>
        </div>
    )
}

// const User = ({ name, age, isMarried, hobbies }) => {
//     return (
//         <div>
//             <h1>Name: {name}</h1>
//             <h1>Age: {age}</h1>
//             <h1>Is Married: {isMarried}</h1>
//             <h1>Hobbies:{hobbies}</h1>
//         </div>
//     )
// }

export default App
