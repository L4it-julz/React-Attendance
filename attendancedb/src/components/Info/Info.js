import React from "react";

import empIcon from '../../image/empIcon.png';
import Textinput from "../UI/Textinput";
import classes from './Info.module.css'
import Infotimelog from "./Infotimelog";



const Info = (props) => {
    const employee = props.data
    console.log('datas', employee.fname )
    return(
        <section className={classes.info}>
            <div className={classes.container}>
                <div>
                    <Textinput title={'NAME: '} value={`${employee.fname}`}/>
                    <Textinput title={'LOCATION: '} value={'LANANG - BLDG. 1'}/>
                    <Textinput title={'ASSIGNMENT: '} value={'IT STAFF'}/>
                </div>
                <div>
                    <img src={empIcon} className={classes.picture} />
                </div>
            </div>
            
           <Infotimelog />
        </section>
    );
}

export default Info;