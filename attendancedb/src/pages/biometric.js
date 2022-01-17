import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";

import ReactCursorPosition from 'react-cursor-position';

import Header from '../components/Header/header';


import { getEmployee } from '../redux/ducks/employees';
import { getAttendance, postAttendance } from '../redux/ducks/attendance';

import { Form, Card, Table, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Infos from '../components/employeeUI/Info';
import Logs from '../components/employeeUI/Logs';
import Footer from '../components/Footer/footer';
import { Alert } from 'react-alert';


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

    const UseFocus = () => {
        const htmlElRef = useRef(null)
        const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}
    
        return [ htmlElRef,  setFocus ] 
    }

    
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
      const [msg, setmsg] = useState('')
      const [barcode, setBarcode] = useState('')
      const [inputRef, setInputFocus] = UseFocus();
    //   dispatch(getAttendance());
     
    setTimeout(() => {
        setAtt(attendance)
      }, 100);

      const search = (barcode) => {
        setBarcode(barcode.value)
        var d = new Date();
        var hour = d.getHours() >= 10 ?  d.getHours() : '0' + d.getHours();
        var minute = d.getMinutes() >= 10 ? d.getMinutes() : '0' + d.getMinutes();
        var seconds = d.getSeconds() >= 10 ? d.getSeconds() : '0' + d.getSeconds();
        var dates = d.getDate();
        var months = d.getMonth()+1 > 10 ? d.getMonth()+1 :`0${d.getMonth()+1}`;
        var years = d.getFullYear();
        var fullDate = `${years}-${months}-${dates}`

        console.log('find', employee.find(emp => emp.externalID === barcode.value))

        if(employee.find(emp => emp.externalID === barcode.value)){
            var data = employee.filter(emp => emp.externalID === barcode.value);
            var check = att.filter(times => times.externalID === barcode.value && times.logDate === fullDate);
            console.log('check', check.length)
            setInfo(data[0])
        } else {
            setmsg('EMPLOYEE NOT FOUND !!!')

              
            // reset after 30secs
            setTimeout(() => {
                setInfo(init)
                setAtt('')
                setmsg('')
                setBarcode('')
              }, 30000);

            
        }
        
       if(check){
           if(check.length){ 
            var c =  check[check.length - 1].logTime;
            var realmins = (d.getHours() * 60) + d.getMinutes();
            var logmins = (parseInt(c.split(':')[0]) * 60) + parseInt(c.split(':')[1]) + 3;
            }
          
           var pass = 0;
        //    console.log('check', realmins + ' '+ logmins)
            if(!check.length){
                pass = 1;
                setmsg('THANK YOU !!!')
                setBarcode('')

                  
            // reset after 30secs
            setTimeout(() => {
                setInfo(init)
                setAtt('')
                setmsg('')
              }, 30000);

            
            }
           else if(realmins > logmins){
            pass = 1;
            setBarcode('')
            setmsg('THANK YOU !!!')

              
            // reset after 30secs
            setTimeout(() => {
                setInfo(init)
                setAtt('')
                setmsg('')
              }, 30000);


           } else {
            setBarcode('')
            setmsg('YOU HAVE SIGN IN !!!')
            return barcode

              
            // reset after 30secs
            setTimeout(() => {
                setInfo(init)
                setAtt('')
                setmsg('')
              }, 30000);

            
           }
       } 

        if (pass) {
           console.log('checkData', data)
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
                setlogs(logTime ? logTime : '')
        }
        // barcode.value = '';
        // return barcode.select()
       
      }

     
      const useMountEffect = (fun) => useEffect(fun, []);
      useMountEffect(  setInputFocus )

    return (
        <ReactCursorPosition>
        <main style={{backgroundColor: '#E7F2F8', height: 720,  overflow:'hidden'}} onClick={ setInputFocus }>
              <center>
                        <Header />
                        <div  style={{ width: '25rem' }}>

                            <InputGroup className="mb-3">
                                    {/* <InputGroup.Text id="basic-addon1">BIOMETRIC ID NO:</InputGroup.Text> */}
                                    <FormControl className='input1'
                                    aria-describedby="basic-addon1"
                                    value={barcode}
                                    onChange={e => search(e.target)}
                                    placeholder='BIOMETRIC ID NO:'
                                    type="password"
                                    ref={inputRef}
                                    />
                            </InputGroup>
                        </div>
                        {/* <button onClick={
                             setInputFocus
                             }> ok</button> */}
                   
            </center>        
            <div className="container" style={{paddingTop:20, width: '1900px'}} >
                <div className="row">
                    <div className="col">
                        <Infos data={info} logs={att ? att : ''} msg={msg} />
                    </div>
                    <div className="col">
                        <Logs data={att}/>
                    </div>
                </div>
            </div>
          <Footer />
        </main>
        </ReactCursorPosition>
    );
}

export default Biometric;