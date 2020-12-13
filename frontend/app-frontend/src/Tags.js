import React from 'react';
import {
  PieChart, Pie, Sector, Cell, ResponsiveContainer
} from 'recharts';
import './App.css';
const data = [
  {value : 100}

];

const COLORS = ['#F2E8CE', '#EEE0BF', '#EAD8AE', '#E6D09E', '#E2C88D', '#DEC17D', '#DAB96C', '#D6B15C', '#D2AA4B', '#CEA23B', '#C49831'];

let renderLabel = function (entry) {

  return (
    entry.name
  )
}

class Tags extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      {console.log((this.props.data.product._keywords))}
      <ResponsiveContainer className="boxshadow">
        <PieChart >
          <Pie
            data={(this.props.data.product._keywords).filter((key) => !key.includes("la") && !key.includes("et") &&!key.includes("de") && !key.includes("le") && !key.includes("aux") && !key.includes("au") ).map(key=> ({name:key, value:100}))}
            dataKey="value"
            label={renderLabel}
          >
            {
              this.props.data.product._keywords.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </>
    );
  }
}

export default Tags;