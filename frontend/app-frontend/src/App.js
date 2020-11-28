import img1 from './img/info.png';
import img2 from './img/piechart.png';
import img3 from './img/world.png';
import img4 from './img/money.png';
import img5 from './img/barchart.png';
import img6 from './img/cast.png';
import Formulaire from './Admin';
import BarChart from './chart_100g.js';
import './App.css';


import { useState } from 'react';


const pages= [
  {id : 0,img :img1, title: "Bienvenue sur votre Dashboard culinaire",content: <Formulaire/>},
  {id : 1,img :img2, title: "Voici la proportion des composants de votre produit (/100g)",content:<BarChart/>},
  {id : 2,img :img3, title: 'x',content:"blablabla"},
  {id : 3,img :img4, title: 'x',content:"manger"},
  {id : 4,img :img5, title: 'x',content:"boire"},
  {id : 5,img :img6, title: 'x',content:"dormir"},
]



function App() {
  const [currentPage, setCurrentPage] = useState(pages[0])

  const handlePageClick = id => {
    const pageClicked = pages.find(p => p.id === id)
    console.log(pageClicked,currentPage)
    setCurrentPage(pageClicked)
  }
  const buttons = pages.map(p => <Button key={p.id} content={p.img} id={p.id} callback={handlePageClick}></Button>)

  return (
    <div className="App">
      <div id="menu-bar">
      { buttons }
      </div>
      <p>{currentPage.title}</p>
      <div id="container">{currentPage.content}</div>
    </div>
  );
}

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
