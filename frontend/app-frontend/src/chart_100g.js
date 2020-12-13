import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import './App.css';

const data = [
  { name: "Fat", gramme: 1.8 },
  { name: "Proteins", gramme: 13 },
  { name: "Carbohydrates", gramme: 72 },
  { name: "Sugars", gramme: 3.9 },
];

class Barchart extends React.Component {
  constructor(props) {
    super(props);
  }
render(){
return (
  <>
  <div style={{textAlign:"center",marginBottom:"20px"}}><img src={this.props.data.product.image_url}></img></div>
  {console.log(Object.keys(this.props.data.product.nutriments).filter((key) => key.includes("_100g")).map(key => ({ name: key, gramme: (this.props.data.product.nutriments)[key]})))}

  <ResponsiveContainer className="boxshadow">
      <BarChart data={Object.keys(this.props.data.product.nutriments).filter((key) => key.includes("_100g") && !key.includes("energy") && !key.includes("saturated")&& !key.includes("carbon")&& !key.includes("nova")&& !key.includes("prepared")&& !key.includes("score")&& !key.includes("fruits-vegetables-nuts-estimate") && !key.includes("nutrition-score-fr")&& !(this.props.data.product.nutriments[key])==0).map(key => ({ name: key, gramme: (this.props.data.product.nutriments)[key]}))} margin={{ top: 30, right: 30, left: 20, bottom: 30 }} style={{height: 400}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fill="white"/>
        <YAxis type="number" domain={[0, 100]}/>
          <Tooltip />
          <Legend />
        <Bar dataKey="gramme" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </>
);}}

export default Barchart;