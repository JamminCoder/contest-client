import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'; 
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contest from "./pages/Contest";
import NewContest from "./pages/NewContest";
import NewContender from "./pages/NewContender";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='' element={ <Home/> } />
        <Route path='/register' element={ <Register/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/contests/new' element={ <NewContest/> }/>
        <Route path='/contests/:contestID' element={ <Contest/> }/>
        <Route path="/contests/:contestID/new_contender/" element={ <NewContender/> }/>
      </Routes>
    </HashRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
