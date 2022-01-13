import React from "react";

import { Form, Card, Table, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './Info.module.css';

const Infos = (props) => {
    const data = props.data;
    console.log('infos:', data)
    return (
        <div className="card" style={{ width: '40rem', height: '25rem' }}>
            <div className="card-body">
            <center><b>Employee details</b></center>
            <div className="container">
                <div className="row" style={{padding: 10, marginTop: '20px'}}>
                    <div className="col-8">
                        <p className="fs-3">Name: {data ? data.fname : ''} {data ? data.lname : ''}</p>
                        <p className="fs-3">Location: {data ? data.location : ''}</p>
                        <p className="fs-3">Position: {data ? data.assign : ''}</p>
                    </div>
                    <div className="col">
                    <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/49067/preview.svg" className="img-thumbnail" alt="2x2" width={200} height={500}/>
                    </div>
                </div>
            </div>
            <center>
                <div className={classes.notification}><b>THANK YOU / YOU HAVE SIGN IN</b></div>
            </center>
            </div>
      </div>
        
    );
}

export default Infos;