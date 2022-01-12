import axios from "axios";

var host = 'localhost';
var port = '3030';

export function requestGetEmployee() {
    return axios.request({
        method: "GET",
        url: `http://${host}:${port}/Employees/holden`
    })
}

export const addEmployeePost = async data => await axios.post(`http://${host}:${port}/Employees/holden`, data);

export const editEmployee = async data => await axios.put(`http://${host}:${port}/Employees/${data.empID}`, data);