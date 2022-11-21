import React, { PureComponent } from 'react';
import './dashboard.css';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';

const DailyData = [
  {
    day: 'Sun',
    kwd: 1398
  },
  {
    day: 'Mon',
    kwd: 9800
  },
  {
    day: 'Tue',
    kwd: 3908
  },
  {
    day: 'Wed',
    kwd: 4800
  },
  {
    day: 'Thu',
    kwd: 3800
  },
  {
    day: 'Fri',
    kwd: 4300
  },
  {
    day: 'Sat',
    kwd: 2400
  }
];

const HourlyData = [

  {
    hour: '0:00',
    kwh: 2400
  },
  {
    hour: '1:00',
    kwh: 1398
  },
  {
    hour: '2:00',
    kwh: 9800
  },
  {
    hour: '3:00',
    kwh: 3908
  },
  {
    hour: '4:00',
    kwh: 4800
  },
  {
    hour: '5:00',
    kwh: 3800
  },
  {
    hour: '6:00',
    kwh: 4300
  },
  {
    hour: '7:00',
    kwh: 2400
  },
  {
    hour: '8:00',
    kwh: 1398
  },
  {
    hour: '9:00',
    kwh: 9800
  },
  {
    hour: '10:00',
    kwh: 3908
  },
  {
    hour: '12:00',
    kwh: 4800
  },
  {
    hour: '13:00',
    kwh: 3800
  },
  {
    hour: '14:00',
    kwh: 4300
  },
  {
    hour: '15:00',
    kwh: 2400
  },
  {
    hour: '16:00',
    kwh: 1398
  },
  {
    hour: '17:00',
    kwh: 9800
  },
  {
    hour: '18:00',
    kwh: 3908
  },
  {
    hour: '19:00',
    kwh: 4800
  },
  {
    hour: '20:00',
    kwh: 3800
  },
  {
    hour: '21:00',
    kwh: 4300
  },
  {
    hour: '22:00',
    kwh: 2400
  },
  {
    hour: '23:00',
    kwh: 1398
  }
];

export default function DailyCharts() {

    return (
      <>
      <ResponsiveContainer width="75%" aspect={3} id = 'daily-chart'>
        <AreaChart
          title='Daily kwH'
          width={700}
          height={500}
          data={DailyData}
          margin={{
            top: 20,
            right: 20,
            bottom: 30,
          }}
        >
      
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" >
            <Label value='Daily kWh' position='bottom' style={{ textAnchor: 'middle', fontSize: '120%', fill: 'white' }}></Label> 
          </XAxis>
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="kwd" stroke="#FFFFFF" fill="#BF2F1B" />
        </AreaChart>
      </ResponsiveContainer>
     
      <ResponsiveContainer width="75%" aspect={3} id = 'hourly-chart'>
        <BarChart
          width={700}
          height={300}
          data={HourlyData}
          margin={{
            top: 20,
            right: 20,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" >
            <Label value='Hourly kWh' position='bottom' style={{ textAnchor: 'middle', fontSize: '120%', fill: 'white' }}></Label> 
          </XAxis>
          <YAxis />
          <Tooltip />
          <Bar dataKey="kwh" fill="#BF2F1B" />
        </BarChart>
      </ResponsiveContainer>
      </>

      
    );
  }

  