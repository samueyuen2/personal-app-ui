import { call, put, take } from "@redux-saga/core/effects";
import {
    createNewExpenseInputRecord_Success,
    createNewExpenseInputRecord_Error
} from '../actions/accountingActions'
import axios from "axios";

function axiosWrapper(method, url, data) {
    return axios({
        method: method,
        url: url,
        responseType: 'json',
        data: data
    })
}

function* createNewGeneralExpenseInputRecord(payload) {
    try {
        let response = yield call(
            axiosWrapper,
            'post',
            'http://localhost:8080/accounting/createNewGeneralExpenseInputRecord',
            {
                date: payload.date,
                serviceProvideType: payload.serviceProvideType,
                serviceProviderName: payload.serviceProviderName,
                paymentType: payload.paymentType,
                expense: payload.expense,
                items: payload.items
            }
        )
        if (response.status === 200)
            yield put(createNewExpenseInputRecord_Success(response.data))
        else
            yield put(createNewExpenseInputRecord_Error("Status code is not 200, better check it out."))
    } catch (error) {
        yield put(createNewExpenseInputRecord_Error(error.message))
    }
}

export function* watchCreateNewGeneralExpenseInputRecord() {
    while (true) {
        const action = yield take('CREATE_NEW_EXPENSE_INPUT_RECORD_PENDING')
        yield call(createNewGeneralExpenseInputRecord, action.payload)
    }
}