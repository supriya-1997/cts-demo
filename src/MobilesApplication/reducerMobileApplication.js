const reducerMobileApplication = (state, action) => {

    const { type, payload: context } = action
    const { Mobiles } = state;

    switch (type) {
        case 'API_SUCCESS': {
            return {
                ...state,
                ...context
            }
        }
        default: {
            return state
        }
    }
}
export default reducerMobileApplication