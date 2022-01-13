import React from "react";

import { Form, Card, Table, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Logs = (props) => {
    // console.log("time",props)
    const data = props.data
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
                        {data ? data.map( e => <p>{e.name} - {e.logTime}</p> ): ''}
                        {/* <p>{name} - {time}</p> */}
                        
                    </div>
                </center>
                
            </div>
      </div>
        
    );
}

export default Logs;