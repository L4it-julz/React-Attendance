import { Fragment } from 'react';
import DatetimeDisplay from './components/Clock/DatetimeDisplay';
import Info from './components/Info/Info';
import Header from "./components/Layout/Header";


function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <DatetimeDisplay />
        <Info />
      </main>
    </Fragment>
    
  );
}

export default App;
