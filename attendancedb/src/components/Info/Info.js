import React from "react";

import empIcon from '../../image/empIcon.png';
import Textinput from "../UI/Textinput";
import classes from './Info.module.css'
import Infotimelog from "./Infotimelog";



const Info = (props) => {
    return(
        <section className={classes.info}>
            <div className={classes.container}>
                <div>
                    <Textinput title={'ID:'} value={10462}/>
                    <Textinput title={'NAME:'} value={'JULIUS LEGASPI'}/>
                    <Textinput title={'BRANCH:'} value={'LANANG - B1'}/>
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