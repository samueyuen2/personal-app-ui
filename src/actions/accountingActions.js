const CREATE_NEW_EXPENSE_INPUT_RECORD_PENDING = 'CREATE_NEW_EXPENSE_INPUT_RECORD_PENDING';
const CREATE_NEW_EXPENSE_INPUT_RECORD_SUCCESS = 'CREATE_NEW_EXPENSE_INPUT_RECORD_SUCCESS';
const CREATE_NEW_EXPENSE_INPUT_RECORD_ERROR = 'CREATE_NEW_EXPENSE_INPUT_RECORD_ERROR';

export const createNewExpenseInputRecord_Pending = (data) => {
    return {
        type: CREATE_NEW_EXPENSE_INPUT_RECORD_PENDING,
        payload: data
    }
}

export const createNewExpenseInputRecord_Success = (data) => {
    return {
        type: CREATE_NEW_EXPENSE_INPUT_RECORD_SUCCESS,
        payload: data
    }
}

export const createNewExpenseInputRecord_Error = (errorMessage) => {
    return {
        type: CREATE_NEW_EXPENSE_INPUT_RECORD_ERROR,
        errorMessage: errorMessage
    }
}