import img1 from './img/info.png';
import img2 from './img/piechart.png';
import img3 from './img/world.png';
import img4 from './img/euro.png';
import img5 from './img/barchart.png';
import img6 from './img/cast.png';
import './App.css';
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

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];

function App() {
  return (
    <div className="App">
      <div id="menu-bar">
        <div class="menu-item"><img src={img1} alt="info"></img></div>
        <div class="menu-item"><img src={img2} alt="piechart"></img> </div>
        <div class="menu-item"><img src={img3} alt="world"></img></div>
        <div class="menu-item"><img src={img4} alt="euro"></img></div>
        <div class="menu-item"><img src={img5} alt="barchart"></img></div>
        <div class="menu-item"><img src={img6} alt="cast"></img></div>
      </div>
      <div id="container">{renderPieChart}</div>
      <p>Répartition du cul</p>
      
    </div>
  );
}
const renderPieChart = (
  <ResponsiveContainer>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
);
export default App;
