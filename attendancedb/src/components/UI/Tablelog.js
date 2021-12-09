import React from "react";
import classes from './Tablelog.module.css'

const Tablelog = () => {
    return(
        <table className={classes.table}>
            <tr>
                <th>Date</th>
                <th>Time</th>
            </tr>
            <tr>
                <td>December 04, 2021</td>
                <td>05:19 PM</td>
            </tr>
        </table>
    );
}

export default Tablelog;