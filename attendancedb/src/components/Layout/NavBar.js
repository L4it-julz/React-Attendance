import React from "react";
import NavItem from "./NavItem";
import classes from './NavBar.module.css'

const Navbar = () => {
    return(
        <main className={classes.main}>
            <NavItem>On Duty</NavItem>
            <NavItem>Daily Time Record</NavItem>
        </main>
    );
}

export default Navbar;