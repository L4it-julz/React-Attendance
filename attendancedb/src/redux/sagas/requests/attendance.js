import axios from "axios";

var host = 'localhost';
var port = '3030';

export function requestGetAttendance() {
    return axios.request({
        method: "GET",
        url: `http://${host}:${port}/Attendance/holden`
    })
}

export const addAttendancePost = async data => await axios.post(`http://${host}:${port}/Attendance/holden`, data);

export const editAttendance = async data => await axios.put(`http://${host}:${port}/Attendance/${data.empID}`, data);