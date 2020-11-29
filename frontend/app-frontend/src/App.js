import React from "react";
import img1 from './img/info.png';
import img2 from './img/piechart.png';
import Formulaire from './Admin';
import BarChart from './chart_100g.js';
import Ecologie from './Ecologie';
import Allergens from './Allergens';
import Score from './Score.js';
import Tags from './Tags';
import Ventes from './Ventes';
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const WidgetsData = [
  {
    title: <p>Voici la proportion des composants de votre produit (/100g)</p>,
    main: <BarChart/>

  },
  {
    title: <p>Vous trouverez ici les indications sur l'impact écologique de votre produit.</p>,
    main:  <Ecologie/>
  },
  {
    title: <p>Voici les différents tags en rapport avec votre produit</p>,
    main:  <Tags/>
  },
  {
    title: <p>Voici le score nutritif de votre aliment</p>,
    main:  <Score/>
  },
  {
    title: <p>Voici un graphique présentant les potentiels allergènes présents dans votre produit.</p>,
    main:  <Allergens/>
  },
  {
    title: <p>Voici vos ventes au cours de l'année pour le nutella</p>,
    main:  <Ventes/>
  }
];

export default function SidebarExample() {
  return (
    <Router>
      <div id="menu-bar">
        <div>
              <div className="button"><Link to="/"><img src={img1} alt="img1"></img></Link></div>
              <div className="button"><Link to="/Widgets"><img src={img2} alt="img2"></img></Link></div>
        </div>
      </div>

        <div id="container">
          <Switch>
            <Route
              path={"/"}
              exact={true}
              children={<Formulaire/>}
            />
            <Route
              path={"/Widgets"}
              exact={true}
              children={<Widgets data={WidgetsData}/>}
            />
          </Switch>
        </div>
    </Router>
  );
}

const Widgets = ({data}) =>{
  return (
  <>
    {data.map(w => (
      <>
      {w.title} 
      {w.main}
      </>
    ))}
  </>)
}