const initialState = {}

const accountingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_NEW_ACCOUNTING_RECORD':
            return { ...state, isDataFlowing: true }
        default: {
            return state
        }
    }
}

export default accountingReducer;