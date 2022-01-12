export const GET_EMPLOYEES = "GET_EMPLOYEES";
export const ADD_EMPLOYEES = "ADD_EMPLOYEES";
export const UPDATE_EMPLOYEES = "UPDATE_EMPLOYEES";
const SET_EMPLOYEES = "SET_EMPLOYEES";


export const getEmployee = () => ({
    type: GET_EMPLOYEES
});

export const setEmployees = (employee) => ({
    type: SET_EMPLOYEES,
    employee
})

export const postEmployee = (data) => ({
    type: ADD_EMPLOYEES,
    data
})

export const updateEmployee = (data) => ({ 
    type: UPDATE_EMPLOYEES, 
    data 
});

const initialState = {
    employee: undefined
  };

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES:
            const {employee} = action;
            return {...state, employee};
        default:
            return state;
    }
};