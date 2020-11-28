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

export default class Barchart extends React.Component {
render(){
return (
  <ResponsiveContainer>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 100]}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="gramme" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
);}}