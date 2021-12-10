import React from "react";
import Button from "../UI/Button";
import Textsearch from "../UI/Textsearch";
import classes from "./Searchbar.module.css"


const Searchbar = () => {
    return(
        <section className={classes.searchbar}>
            <Textsearch />
            <Button />
        </section>
    );
}

export default Searchbar;