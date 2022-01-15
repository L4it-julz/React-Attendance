import React from "react";

import { Form, Card, Table, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Logs = (props) => {
    console.log('logsCheck', props)
    var d = new Date();
    var dates = d.getDate();
    var months = d.getMonth()+1 > 10 ? d.getMonth()+1 :`0${d.getMonth()+1}`;
    var years = d.getFullYear();
    var fullDate = `${years}-${months}-${dates}`;

    const data = props.data ? props.data.filter(e => e.logDate === fullDate) : ''
    console.log("time", data)
    const name = 'julius legaspi'
    const time = "11:50 PM"
    return (
        <div className="card" style={{ width: '25rem' , height: '25rem'}}>
            <div className="card-body">
                <center><b>TODAY EMPLOYEE'S LOG</b></center>
                <center>
                    <div style={{
                        marginTop: '15px',
                         overflowY: 'scroll',
                         height: '20rem'
                    }}>

                        {data ? [].concat(data)
                            .sort((a, b) => a.attID < b.attID ? 1 : -1)
                            .map((e, i) => 
                            <p key={i}>{e.name} - {e.logTime}</p>
                            ): ''}  
                        {/* {data ? data.map( e => <p>{e.name} - {e.logTime}</p> ): ''} */}
                        {/* <p>{name} - {time}</p> */}
                        
                    </div>
                </center>
                
            </div>
      </div>
        
    );
}

export default Logs;