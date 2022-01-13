import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Header from '../components/Header/header';


import { getEmployee } from '../redux/ducks/employees';
import { getAttendance } from '../redux/ducks/attendance';

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
    internalID: "",
    lname: "",
    location: "",
    mname: "",
    picture: null,
}

const init_att = {
    attID: '',
    empID: '',
    internalID: '',
    logDate: '',
    logTime: '',
    name: ''
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
      const [barcode, setBarcode] = useState('')
    //   dispatch(getAttendance());
     
    setTimeout(() => {
        setAtt(attendance)
      }, 1000);

      const search = (barcode) => {
        setBarcode(barcode)
        setAtt(attendance)
        var data = employee.filter(emp => emp.internalID === parseInt(barcode))
        setInfo(data ? data[0] : init)
        console.log('search', data[0])
       
      }

      

    return (
        <main style={{backgroundColor: '#EAEFF2', height: 650}}>
              <center>
                        <Header />
                        <div  style={{ width: '25rem' }}>
                            <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">BIOMETRIC ID NO:</InputGroup.Text>
                                    <FormControl
                                    // placeholder="lastname"
                                    aria-label="lastname"
                                    aria-describedby="basic-addon1"
                                    value={barcode}
                                    onChange={e => search(e.target.value)}
                                    />
                            </InputGroup>
                        </div>
                        
                        {/* <input type='text' value={barcode} onChange={e => search(e.target.value)}/> */}
                        {/* <Info  data={info}/> */}
                   
            </center>        
            <div class="container" style={{paddingTop:20}} >
                <div class="row">
                    <div class="col">
                        <Infos data={info}/>
                    </div>
                    <div class="col">
                        <Logs data={att}/>
                    </div>
                </div>
            </div>
          <Footer />
        </main>
    );
}

export default Biometric;