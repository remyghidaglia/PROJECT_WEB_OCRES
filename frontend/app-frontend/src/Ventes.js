import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import './App.css';

const data = [
  {
      name: 'Janvier', ventes: 4000, 
},
  {
    name: 'Février', ventes: 3000, 
  },
  {
    name: 'Mars', ventes: 2000, 
  },
  {
    name: 'Avril', ventes: 2780,
  },
  {
    name: 'Mai', ventes: 1890, 
  },
  {
    name: 'Juin', ventes: 2390,
  },
  {
    name: 'Juillet', ventes: 3490, 
  },
  {
    name: 'Août', ventes: 2700, 
  },
  {
    name: 'Septembre', ventes: 2500,
  },
  {
    name: 'Octobre', ventes: 3000, 
  },
  {
    name: 'Novembre', ventes: 3400,
  },
  {
    name: 'Décembre', ventes: 4200, 
  },
];

export default class Ventes extends React.Component {

  render() {
    return (
        <ResponsiveContainer className="boxshadow">
          <AreaChart
            data={data}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="ventes" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
    );
  }
}
