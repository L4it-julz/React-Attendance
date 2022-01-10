import { Fragment } from 'react';
import DatetimeDisplay from './components/Clock/DatetimeDisplay';
import Info from './components/Info/Info';
import Header from "./components/Layout/Header";
import EmployeeTime from './components/onduty/EmployeeTime';
import Searchbar from './components/SearchArea/Searchbar';
import './App.css'

function App() {
  return (
    <Fragment>
      <div className='wrapper'>
        <div id="header">
          <Header />
        </div>
        <div id='welcome'>
          <h1>Welcome to Lanang BLGD 1!</h1>
        </div>
        <div id='datetimeDisplay'>
        <DatetimeDisplay />
        </div>
        <div id='info'>
        <Info />
        </div>
        <div id='employeeTime'> <EmployeeTime /></div>
        <div id='searchbar'><Searchbar /></div>
      </div>
    </Fragment>
  );
}

export default App;