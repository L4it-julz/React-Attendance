import React from "react";
import classes from './Textinput.module.css'

const Textinput = (props) => {
    return(
        <div className={classes.context}>
            <label className={classes.title}>{props.title}</label>
            <input className={classes['col-6','input']} type='text' value={props.value} onChange={props.onChange}/>
        </div>
    );
}

export default Textinput;