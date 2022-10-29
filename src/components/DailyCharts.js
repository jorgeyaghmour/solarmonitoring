import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Data = [

  {
    name: 'Sun',
    pv: 1398
  },
  {
    name: 'Mon',
    pv: 9800
  },
  {
    name: 'Tue',
    pv: 3908
  },
  {
    name: 'Wed',
    pv: 4800
  },
  {
    name: 'Thu',
    pv: 3800
  },
  {
    name: 'Fri',
    pv: 4300
  },
  {
    name: 'Sat',
    pv: 2400
  }
];

export default function DailyChart() {

    return (
      <ResponsiveContainer width="75%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={Data}
          margin={{
            top: 50,
            left: 200,
            bottom: 5,
          }}
        >
        
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#BF2F1B" />
        </BarChart>
      </ResponsiveContainer>
    );
  }