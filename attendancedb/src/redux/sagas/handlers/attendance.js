import {call, put} from "@redux-saga/core/effects";
import { setAttendance } from "../../ducks/attendance";
import { requestGetAttendance, addAttendancePost,  editAttendance} from "../requests/attendance";

export function* handleGetAttendance(action) {
    try {
        const response = yield call(requestGetAttendance);
        const { data } = response;
        yield put(setAttendance(data));
    } catch (error) {
        console.log(error);
    }
}

export function* handlePostAttendance(action) {
    try {
        const { data } = action;
        yield call(addAttendancePost, data);
        const response = yield call(requestGetAttendance);
        yield put(setAttendance(response.data));
    } catch (error) {
        console.log(error);
    }
}

export function* updateAttendance(action){
    try {
      const { data } = action;
      yield call(editAttendance, data);
      const response = yield call(requestGetAttendance);
        yield put(setAttendance(response.data));
    } catch ( err ) {
      console.log( err );
    }
  }