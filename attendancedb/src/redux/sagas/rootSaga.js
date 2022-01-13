import { takeLatest } from "@redux-saga/core/effects";

import { handleGetEmployee, handlePostEmployee, updateEmployee } from "./handlers/employees";
import { GET_EMPLOYEES, ADD_EMPLOYEES, UPDATE_EMPLOYEES } from "../ducks/employees";

import { handleGetAttendance, handlePostAttendance, updateAttendance } from "./handlers/attendance";
import { GET_ATTENDANCE, ADD_ATTENDANCE, UPDATE_ATTENDANCE } from "../ducks/attendance";

export function* watcherSaga() {
    // get data section
    yield takeLatest(GET_EMPLOYEES, handleGetEmployee);
    yield takeLatest(GET_ATTENDANCE, handleGetAttendance);

    //insert data section
    yield takeLatest(ADD_EMPLOYEES, handlePostEmployee);
    yield takeLatest(ADD_ATTENDANCE, handlePostAttendance);

    //update data section
    yield takeLatest(UPDATE_EMPLOYEES, updateEmployee);
    yield takeLatest(UPDATE_ATTENDANCE, updateAttendance);
}