import React from "react";
import classes from './Textinput.module.css'

const Textinput = (props) => {
    return(
        <div>
            <label className={classes.title}>{props.title}</label>
            <input className={classes.input, classes.col-6} type='text' value={props.value} onChange={props.onChange}/>
        </div>
    );
}

export default Textinput;