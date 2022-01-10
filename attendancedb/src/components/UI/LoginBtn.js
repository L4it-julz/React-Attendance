import React from "react";
import classes from './LoginBtn.module.css'

const LoginBtn = (props) => {
    return (
        <button className={classes.button}>{props.title}</button>
    );
}

export default LoginBtn;