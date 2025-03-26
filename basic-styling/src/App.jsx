import { FaCartArrowDown } from "react-icons/fa"
import StyleCard from "./components/StyleCard"
import ProfileCard from "./components/ProfileCard"
import IconComponent from "./components/IconComponent"

const App = () => {
    const styles = { color: "white", backgroundColor: "teal", padding: "2rem" }
    return (
        <div>
            {/* <section>
                <h1 style={styles}>Inline Style</h1>
            </section> */}
            {/* <FaCartArrowDown /> */}
            <StyleCard />
            <ProfileCard />
            <IconComponent />
        </div>
    )
}

export default App
