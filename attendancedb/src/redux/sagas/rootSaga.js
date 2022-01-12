import { takeLatest } from "@redux-saga/core/effects";

import { handleGetEmployee, handlePostEmployee, updateEmployee } from "./handlers/employees";
import { GET_EMPLOYEES, ADD_EMPLOYEES, UPDATE_EMPLOYEES } from "../ducks/employees";

export function* watcherSaga() {
    // get data section
    yield takeLatest(GET_EMPLOYEES, handleGetEmployee);

    //insert data section
    yield takeLatest(ADD_EMPLOYEES, handlePostEmployee);

    //update data section
    yield takeLatest(UPDATE_EMPLOYEES, updateEmployee);
}