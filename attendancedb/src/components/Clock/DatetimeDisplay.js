import React from 'react';
import classes from './DatetimeDisplay.module.css';
import Clock from 'react-digital-clock';

const DatetimeDisplay = () => {

    var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    var d = new Date();
    var dayName = days[d.getDay()];
    var dayTime = d.toLocaleTimeString('default', { time: 'short' });
    var monthName = d.toLocaleString('default', { month: 'long' })
    var dayNumber = d.getDay()
    var yearNumber = d.getFullYear()
    return(
        <section className={classes.dateSection}>
            <h1 className={classes.dayname}>{dayName}</h1>
            <h1 className={classes.daytime}><Clock format={'hh-mm-ss'} size={12}/></h1>
            <h1 className={classes.monthname}>{monthName} {dayNumber}</h1>
            <h1 className={classes.year}>{yearNumber}</h1>
        </section>
    );
}

export default DatetimeDisplay;
