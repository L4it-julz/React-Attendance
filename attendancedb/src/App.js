import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Administrator from './pages/administrator';
import Biometric from './pages/biometric';
import TakePhotos from './pages/camera';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Biometric />} />
        <Route path="/administrator" element={<Administrator />} />
        <Route path="/picture" element={ <TakePhotos /> } />
      </Routes>
    </Fragment>
  );
}

export default App;