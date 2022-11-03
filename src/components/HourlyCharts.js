import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Data = [
  {
    name: '0:00',
    pv: 2400
  },
  {
    name: '1:00',
    pv: 1398
  },
  {
    name: '2:00',
    pv: 9800
  },
  {
    name: '3:00',
    pv: 3908
  },
  {
    name: '4:00',
    pv: 4800
  },
  {
    name: '5:00',
    pv: 3800
  },
  {
    name: '6:00',
    pv: 4300
  },
  {
    name: '7:00',
    pv: 2400
  },
  {
    name: '8:00',
    pv: 1398
  },
  {
    name: '9:00',
    pv: 9800
  },
  {
    name: '10:00',
    pv: 3908
  },
  {
    name: '12:00',
    pv: 4800
  },
  {
    name: '13:00',
    pv: 3800
  },
  {
    name: '14:00',
    pv: 4300
  },
  {
    name: '15:00',
    pv: 2400
  },
  {
    name: '16:00',
    pv: 1398
  },
  {
    name: '17:00',
    pv: 9800
  },
  {
    name: '18:00',
    pv: 3908
  },
  {
    name: '19:00',
    pv: 4800
  },
  {
    name: '20:00',
    pv: 3800
  },
  {
    name: '21:00',
    pv: 4300
  },
  {
    name: '22:00',
    pv: 2400
  },
  {
    name: '23:00',
    pv: 1398
  }
];

export default function HourlyChart() {

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