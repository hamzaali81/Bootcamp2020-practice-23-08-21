export const counterReducer = (state, action) => {
    switch (action) {
        case 'ADD':
            return ++state
            
        default:
            return state;
    }

}