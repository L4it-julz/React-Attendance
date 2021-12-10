import React from "react";
import classes from './Tablelog.module.css'

const Tablelog = (props) => {
    return(
        <table className={classes.table}>
            <tr>
                {props.columns.map(col => <th>{col}</th>)}
            </tr>
           
                {props.rows.map(row => 
                     <tr>
                <td>{row.item}</td>
                <td>{row.subitem}</td>
                </tr>
                )}
            
        </table>
    );
}

export default Tablelog;