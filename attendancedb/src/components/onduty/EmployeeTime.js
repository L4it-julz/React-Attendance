import React from "react";
import Tablelog from "../UI/Tablelog";
import classes from "./EmployeeTime.module.css"

const EmployeeTime = () => {
    const dataCols = ['Name', 'TIme']
    const dataRows = [
        {item:'Julius Legaspi', subitem:'7:50 AM'},
        {item:'Julius Legaspi', subitem:'11:19 PM'},
    ]
    
    return(
        <section className={classes.emp}>
            <div><Tablelog columns={dataCols} rows={dataRows} /></div>
        </section>
    );
}

export default EmployeeTime;