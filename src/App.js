import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HourlyChart from './components/HourlyCharts';
import DailyChart from './components/DailyCharts';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <h1 id='hourly-chart-header'>Hourly Chart</h1>
      <div id="hourly-chart">
        <HourlyChart />
      </div>
      <h1 id='daily-chart-header'>Daily Chart</h1>
      <div id="daily-chart">
      <DailyChart />
      </div>
    </div>
  )
}

export default App