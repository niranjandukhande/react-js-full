const Greeting = () => {
    const greetingMessage = "John"
    const date = new Date()
    return (
        <div>
            <h1>Welcome, {greetingMessage}</h1>
            <p>Today's Date: {date.toLocaleDateString()}</p>
        </div>
    )
}

export default Greeting
