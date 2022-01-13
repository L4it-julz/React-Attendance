export const GET_ATTENDANCE = "GET_ATTENDANCE";
export const ADD_ATTENDANCE = "ADD_ATTENDANCE";
export const UPDATE_ATTENDANCE = "UPDATE_ATTENDANCE";
const SET_ATTENDANCE = "SET_ATTENDANCE";


export const getAttendance = () => ({
    type: GET_ATTENDANCE
});

export const setAttendance = (attendance) => ({
    type: SET_ATTENDANCE,
    attendance
})

export const postAttendance = (data) => ({
    type: ADD_ATTENDANCE,
    data
})

export const updateAttendance = (data) => ({ 
    type: UPDATE_ATTENDANCE, 
    data 
});

const initialState = {
    attendance: undefined
  };

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ATTENDANCE:
            const {attendance} = action;
            return {...state, attendance};
        default:
            return state;
    }
};