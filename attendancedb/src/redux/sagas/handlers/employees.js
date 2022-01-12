import {call, put} from "@redux-saga/core/effects";
import { setEmployees } from "../../ducks/employees";
import { requestGetEmployee, addEmployeePost,  editEmployee} from "../requests/employees";

export function* handleGetEmployee(action) {
    try {
        const response = yield call(requestGetEmployee);
        const { data } = response;
        yield put(setEmployees(data));
    } catch (error) {
        console.log(error);
    }
}

export function* handlePostEmployee(action) {
    try {
        const { data } = action;
        yield call(addEmployeePost, data);
        const response = yield call(requestGetEmployee);
        yield put(setEmployees(response.data));
    } catch (error) {
        console.log(error);
    }
}

export function* updateEmployee(action){
    try {
      const { data } = action;
      yield call(editEmployee, data);
      const response = yield call(requestGetEmployee);
        yield put(setEmployees(response.data));
    } catch ( err ) {
      console.log( err );
    }
  }