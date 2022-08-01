import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { HashRouter, Routes, Route } from 'react-router-dom'; 
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='' element={ <Home/> } />
        <Route path='/register' element={ <div className='grid place-items-center h-[90vh] px-2'><Register/></div> }/>
        <Route path='/login' element={ <div className='grid place-items-center h-[90vh] px-2'><Login/></div> }/>
      </Routes>
    </HashRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
