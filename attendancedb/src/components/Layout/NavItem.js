import React from "react";

import classes from './NavItem.module.css'

const NavItem = (props) => {
    return (
        <li className={classes.li}>{props.children}</li>
    );
}

export default NavItem;