import React from 'react';
import { Redirect } from 'react-router';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Charts from './pages/Charts';
import LoginForm from './components/Login/loginform';
import DailyCharts from './components/DailyCharts';
import HourlyCharts from './components/HourlyCharts';
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
          <Route path="charts" element={<Charts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}




//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
