import React from "react";
import img1 from './img/info.png';
import img2 from './img/piechart.png';
import img3 from './img/user.png';
import Formulaire from './Admin';
import New from './User';
import Liste from './ListeExercices';
import BarChart from './chart_100g.js';
import Ecologie from './Ecologie';
import Allergens from './Allergens';
import Score from './Score.js';
import Tags from './Tags';
import Exos from './ListeExercices';
import './App.css';
import { useState } from 'react';
import EditExercise from "./EditEx";
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
    title: <p>Voici un récapitulatif de vos entraînements physiques.</p>,
    main:  <Exos/>
  }
];

function SidebarExample() {
  return (
    <Router>
      <div id="menu-bar">
        <div>
              <div className="button"><Link to="/"><img src={img1} alt="img1"></img></Link></div>
              <div className="button"><Link to="/New"><img src={img3} alt="img3"></img></Link></div>
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
              path={"/New"}
              exact={true}
              children={<New/>}
            />
            <Route
              path={"/Exercices"}
              exact={true}
              children={<Liste/>}
            />
            <Route
              path={"/Widgets"}
              exact={true}
              children={<Widgets data={WidgetsData}/>}
            />
            <Route path="/edit/:id" component={EditExercise} />
          </Switch>
        </div>
    </Router>
  );
}

export default SidebarExample;

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