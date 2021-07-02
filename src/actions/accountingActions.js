const CREATE_NEW_ACCOUNTING_RECORD = 'CREATE_NEW_ACCOUNTING_RECORD';

export const createNewAccountingRecord = (data) => {
    return {
        type: CREATE_NEW_ACCOUNTING_RECORD,
        payload: data
    }
}