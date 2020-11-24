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
import { useState } from 'react';

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
];
const pages= [
  {id : 0,img :img1, content:"hello"},
  {id : 1,img :img2, content:"eh "},
  {id : 2,img :img3, content:"blablabla"},
  {id : 3,img :img4, content:"manger"},
  {id : 4,img :img5, content:"boire"},
  {id : 5,img :img6, content:"dormir"},
]

// const socials = {
//  linkedin : {piechart :{}},
//  facebook
// }


function App() {
  const [currentPage, setCurrentPage] = useState(pages[0])

  const handlePageClick = id => {
    const pageClicked = pages.find(p => p.id == id)
    console.log(pageClicked,currentPage)
    setCurrentPage(pageClicked)
  }
  const buttons = pages.map(p => <Button key={p.id} content={p.img} id={p.id} callback={handlePageClick}></Button>)

  return (
    <div className="App">
      <div id="menu-bar">
      { buttons }
      </div>
      <div id="container">{currentPage.content}</div>
    </div>
  );
}

const renderChart = (
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


const Button = ({content, callback, id}) => {
  var renderedText = content
  var handleClick = () => callback(id)
  return (
    <button 
      className="button" 
      onClick={handleClick}
    ><img src={renderedText}></img>
    </button>
    )
}



export default App;
