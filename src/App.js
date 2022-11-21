import React from 'react';
import { Redirect } from 'react-router';
import './App.css' ;
import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginForm from './components/Login/loginform';
import Alerts from './pages/Alerts';
import Weather from './pages/Weather';
import Account from './pages/Account';
import Loginform from './components/Login/loginform';
import DailyDataService from './services/daily';

export default function App(){
  return (
    <>
      <BrowserRouter>
      <div className="page">
      <LoginForm />
      </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="weather" element={<Weather />} />
          <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}




//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
