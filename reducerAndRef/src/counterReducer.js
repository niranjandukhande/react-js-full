const initialState = { count: 0 }
const counterReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 }

        case "decrement":
            return { ...state, count: state.count - 1 }

        case "incrementBy10":
            return { ...state, count: state.count + 10 }

        case "decrementBy10":
            return { ...state, count: state.count - 10 }

        case "incrementByAmount":
            return { ...state, count: state.count + action.payload }

        case "reset":
            return { ...state, count: 0 }

        default:
            return state
    }
}

export { initialState, counterReducer }
