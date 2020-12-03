import React from 'react';
import {
  PieChart, Pie, Sector, Cell, ResponsiveContainer
} from 'recharts';
import './App.css';
const data = [
  { name: 'boisson', value: 100 },
  { name: 'derive', value: 100 },
  { name: 'origine', value: 100 },
  { name: 'vapeur', value: 100 },
  { name: 'aliment', value: 100 },
  { name: 'pomme', value: 100 },
  { name: 'moyen', value: 100 },
  { name: 'cereale', value: 100 },
  { name: 'couscou', value: 100 },
  { name: 'terre', value: 100 },
  { name: 'roulee', value: 100 },
  { name: 'base', value: 100 }

];

const COLORS = ['#F2E8CE', '#EEE0BF', '#EAD8AE', '#E6D09E', '#E2C88D', '#DEC17D', '#DAB96C', '#D6B15C', '#D2AA4B', '#CEA23B', '#C49831'];

let renderLabel = function (entry) {

  return (
    entry.name
  )
}

class Tags extends React.Component {

  render() {
    return (
      <ResponsiveContainer className="boxshadow">
        <PieChart >
          <Pie
            data={data}
            fill="white"
            dataKey="value"
            label={renderLabel}
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default Tags;