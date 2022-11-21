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
import DailyList from './daily-list';

export default function App(){
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='solar-monitor' element={<Navbar/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='charts' element={<Charts/>}/>
          <Route path='list' element={<DailyList/>}/>
        </Route>
      </Routes>
      {/* <BrowserRouter>
      <div className="page">
      <Navbar />
      <LoginForm />
      </div>
        
        <Routes>
          <Route path="/" element={<Dashboard />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="charts" element={<Charts />} />
          <Route path="/list" element={<DailyList/>}/>
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}




//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
