import { Fragment } from 'react';
import LoginBtn from '../UI/LoginBtn';
import logo from '../../image/logo-lots-bg-removebg.png';


import classes from './Header.module.css';
import Navbar from './NavBar';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        {/* <h1>LOTS FOR LESS</h1> */}

       <img src={logo} className={classes.logo}/>
     
        <Navbar />
        <LoginBtn title={'Log In'}/>
      </header>
      <div className={classes['main-image']}>
        {/* <img src={mealsImage} alt='A table full of delicious food!' /> */}
      </div>
    </Fragment>
  );
};

export default Header;