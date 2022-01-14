import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Header from '../components/Header/header';


import { getEmployee } from '../redux/ducks/employees';
import { getAttendance, postAttendance } from '../redux/ducks/attendance';

import { Form, Card, Table, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Infos from '../components/employeeUI/Info';
import Logs from '../components/employeeUI/Logs';
import Footer from '../components/Footer/footer';

;

const init = {
    assign: "",
    barcode: '',
    empID: null,
    fname: "",
    externalID: "",
    lname: "",
    location: "",
    mname: "",
    picture: null,
}

const init_att = {
    attID: '',
    empID: '',
    externalID: '',
    logDate: '',
    logTime: '',
    name: ''
}

const init_time = {
    attID: '',
    empID: '',
    externalID: '',
    logDate: "",
    logTime: "",
    name: ""
}



const Biometric = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getEmployee());
        dispatch(getAttendance());
      }, [dispatch]);

      const employee = useSelector((state) => state.employee.employee);
      const attendance = useSelector((state) => state.attendance.attendance);
     

      const [info, setInfo] = useState(init)
      const [att, setAtt] = useState(attendance)
      const [logs, setlogs] = useState('');
      const [barcode, setBarcode] = useState('')
    //   dispatch(getAttendance());
     
    setTimeout(() => {
        setAtt(attendance)
      }, 100);

      const search = (barcode) => {
        setBarcode(barcode.value)

        if(barcode.value.length == 13){
            var data = employee.filter(emp => emp.externalID === barcode.value);
            setInfo(data ? data[0] : init)
        }
        
       
        if (data) {
            var d = new Date();
            var hour = d.getHours() >= 10 ?  d.getHours() : '0' + d.getHours();
            var minute = d.getMinutes() >= 10 ? d.getMinutes() : '0' + d.getMinutes();
            var seconds = d.getSeconds() >= 10 ? d.getSeconds() : '0' + d.getSeconds();
            var dates = d.getDate();
            var months = d.getMonth()+1;
            var years = d.getFullYear();
            var fullDate = `${years}-${months}-${dates}`
            // console.log('fullyear', fullDate)

            var newlog = {
                empID: data[0].empID,
                externalID: data[0].externalID,
                logDate: fullDate,
                logTime: `${hour}:${minute}:${seconds}`,
                name: data[0].fname + ' ' + data[0].lname
            }
            dispatch(postAttendance(newlog))
            setAtt(attendance)
                var logTime = att.filter(times => times.externalID === barcode.value && times.logDate === fullDate);
                console.log('fullyear', logTime)
                setlogs(logTime ? logTime : '')
            
           
        }
        
        return barcode.select()
       
      }

      

    return (
        <main style={{backgroundColor: '#E7F2F8', height: 720,  overflow:'hidden'}}>
              <center>
                        <Header />
                        <div  style={{ width: '25rem' }}>
                            <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">BIOMETRIC ID NO:</InputGroup.Text>
                                    <FormControl
                                    aria-describedby="basic-addon1"
                                    value={barcode}
                                    onChange={e => search(e.target)}
                                    autoFocus
                                    onFocus={e => e.target.select()}
                                    
                                    />
                            </InputGroup>
                        </div>
                        
                   
            </center>        
            <div className="container" style={{paddingTop:20}} >
                <div className="row">
                    <div className="col">
                        <Infos data={info} logs={att ? att : ''}/>
                    </div>
                    <div className="col">
                        <Logs data={att}/>
                    </div>
                </div>
            </div>
          <Footer />
        </main>
    );
}

export default Biometric;