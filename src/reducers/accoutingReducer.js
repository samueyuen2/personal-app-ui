const initialState = {}

const accountingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_NEW_EXPENSE_INPUT_RECORD_SUCCESS':
            return { ...state, isRecordCreated: action.payload.isRecordCreated }
        case 'CREATE_NEW_EXPENSE_INPUT_RECORD_ERROR':
            return { ...state, errorMessage: action.errorMessage }
        default: {
            return state
        }
    }
}

export default accountingReducer;