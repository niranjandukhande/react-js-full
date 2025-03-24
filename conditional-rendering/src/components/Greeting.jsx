const Greeting = ({ timeOfDay }) => {
    return timeOfDay === "morning" ? (
        <div>Good Morning</div>
    ) : (
        <div>Good Afternoon</div>
    )
}

export default Greeting
