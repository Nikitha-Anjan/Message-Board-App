const messagesInitialState = [
    { id: 1, body: 'this is a new message', createdAt: new Date() }
]
const messagesReducer = (state = messagesInitialState , action) => {
    switch(action.type) {
        case 'ADD_MESSAGE' : {
            return state.concat(action.payload)
        }
        default: {
            return [].concat(state)
        }
    }
}

export default messagesReducer