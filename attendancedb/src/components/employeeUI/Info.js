import React from "react";

import { Form, Card, Table, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './Info.module.css';

const Infos = (props) => {
    const data = props.data;
    const logs = props.logs

    var d = new Date();
    var dates = d.getDate();
    var months = d.getMonth()+1;
    var years = d.getFullYear();
    var fullDate = `${years}-${months}-${dates}`;

    const timeLog = logs ? logs.filter(e => e.externalID === data.externalID && e.logDate === fullDate) : ''
    console.log('times:',  timeLog)
    return (
        <div className="card" style={{ width: '40rem', height: '25rem' }}>
            <div className="card-body">
            <center><b>Employee details</b></center>
            <div className="container">
                <div className="row" style={{padding: 10, marginTop: '20px'}}>
                    <div className="col-8">
                        <b>
                            <p className="fs-5">Name: {data ? data.fname : ''} {data ? data.lname : ''}</p>
                            <p className="fs-5">Location: {data ? data.location : ''}</p>
                            <p className="fs-5">Position: {data ? data.assign : ''}</p>
                        </b>
                    </div>
                    <div className="col">
                    <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/49067/preview.svg" className="img-thumbnail" alt="2x2" width={200} height={500}/>
                    </div>
                </div>
            </div>
            <div>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>T1</th>
      <th>T2</th>
      <th>T3</th>
      <th>T4</th>
      <th>T5</th>
      <th>T6</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        {timeLog.length ? timeLog.map((e,i) =>  <td key={i} style={{width: '100px',height: "33px"}}>{e.logTime}</td> ) 
            : 
            <>
            <td style={{width: '100px', height: "33px"}}></td>
            <td style={{width: '100px', height: "33px"}}></td>
            <td style={{width: '100px', height: "33px"}}></td>
            <td style={{width: '100px', height: "33px"}}></td>
            <td style={{width: '100px', height: "33px"}}></td>
            <td style={{width: '100px', height: "33px"}}></td>
            </>
            }
      {/* <td style={{width: '100px'}}>7:15:01 AM</td> */}
    </tr>
  </tbody>
</Table>
            </div>
            <center>
                <div className={classes.notification}><b>THANK YOU / YOU HAVE SIGN IN</b></div>
            </center>
            </div>
      </div>
        
    );
}

export default Infos;