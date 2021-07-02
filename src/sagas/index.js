import { fork } from '@redux-saga/core/effects'
import {
    watchCreateNewGeneralExpenseInputRecord
} from './accountingSagas'

export default function* rootSaga() {
    yield fork(watchCreateNewGeneralExpenseInputRecord)
}