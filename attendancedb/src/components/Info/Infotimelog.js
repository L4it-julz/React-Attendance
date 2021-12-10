import React from "react";
import Tablelog from "../UI/Tablelog";
import classes from './Infotimelog.module.css'

const Infotimelog = () => {
    const dataCols = ['Date', 'TIme']
    const dataRows = [
        {item:'December 4, 2021', subitem:'7:50 AM'},
        {item:'December 4, 2021', subitem:'11:19 PM'},
    ]
    return(
        <section className={classes.Tablelog}>
            <Tablelog columns={dataCols} rows={dataRows} />
        </section>
    );
}

export default Infotimelog;