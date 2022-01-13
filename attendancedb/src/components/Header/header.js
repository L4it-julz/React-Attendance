import React, {Fragment} from "react";
import Clock from "../NewClock/clock";
import classes from './header.module.css';

const Header = () => {
    var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    var d = new Date();
    var dayName = days[d.getDay()];
    var dayTime = d.toLocaleTimeString('default', { time: 'short' });
    var monthName = d.toLocaleString('default', { month: 'long' })
    var dayNumber = d.getDate()
    var yearNumber = d.getFullYear()

    return (
        <Fragment>
            <center>
                <label className={classes.dateStyle}>{dayName} - {monthName} {dayNumber}, {yearNumber}</label>
                <Clock />
            </center>
        </Fragment>
    );
}

export default Header;

