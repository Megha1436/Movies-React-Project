import React from 'react';
import logo from './logo.svg';
import './App.css';
import RootPage from './Pages/RootPage';
import{BrowserRouter} from 'react-router-dom';
import Mainroute from './Pages/route';
function App() {
  return (
    <BrowserRouter>
    <Mainroute/>
    </BrowserRouter>
  );
}

export default App;
