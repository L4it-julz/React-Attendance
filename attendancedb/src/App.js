import { Fragment } from 'react';
import DatetimeDisplay from './components/Clock/DatetimeDisplay';
import Info from './components/Info/Info';
import Header from "./components/Layout/Header";
import EmployeeTime from './components/onduty/EmployeeTime';
import Searchbar from './components/SearchArea/Searchbar';


function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <DatetimeDisplay />
        <Info />
        <EmployeeTime />
        <Searchbar />
      </main>
    </Fragment>
    
  );
}

export default App;
