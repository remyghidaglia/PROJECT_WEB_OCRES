import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts';
import './App.css';
const data = [
  {
    subject: 'Sugars', A: 90,
  },
  {
    subject: 'Salt', A: 15, 
  },
  {
    subject: 'Fat', A: 90,
  },
  {
    subject: 'Sat-Fat', A: 90, 
  }
];

class Score extends React.Component {
 
  render() {
    return (
      <ResponsiveContainer className="boxshadow">
      <RadarChart  data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" color="white"/>
        <PolarRadiusAxis />
        <Radar name="Nutella" dataKey="A" stroke="white" fill="#8884d8" fillOpacity={0.7} />
      </RadarChart>
      </ResponsiveContainer>
    );
  }
}

export default Score;