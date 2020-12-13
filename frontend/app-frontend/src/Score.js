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
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      {console.log(Object.keys(this.props.data.product.nutrient_levels).map(key => (this.props.data.product.nutrient_levels)[key] == "high" ? { name:key, value: 100 } : { name:key, value : 10}))}
      <ResponsiveContainer className="boxshadow">
      <RadarChart  data={Object.keys(this.props.data.product.nutrient_levels).map(key => (this.props.data.product.nutrient_levels)[key] == "high" ? { name:key, value: 100 } : { name:key, value : 10})}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" fill="white"/>
        <Radar  dataKey="value" stroke="white" fill="#9FFFF5" fillOpacity={0.7} />
      </RadarChart>
      </ResponsiveContainer>
      </>
    );
  }
}

export default Score;