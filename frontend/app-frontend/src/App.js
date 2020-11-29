import React from "react";
import img1 from './img/info.png';
import img2 from './img/piechart.png';
import img3 from './img/world.png';
import img4 from './img/money.png';
import img5 from './img/barchart.png';
import img6 from './img/cast.png';
import Formulaire from './Admin';
import BarChart from './chart_100g.js';
import Ecologie from './Ecologie';
import Allergens from './Allergens';
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
  {
    path: "/",
    exact: true,
    title: () =><p>Bienvenue sur votre Dashboard culinaire</p>,
    main: () => <Formulaire/>
  },
  {
    path: "/BarChart",
    title: () =><p>Voici la proportion des composants de votre produit (/100g)</p>,
    main: () => <BarChart/>
  },
  {
    path: "/Ecologie",
    title: () =><p>'Vous trouverez ici les indications sur l'impact écologique de votre produit.'</p>,
    main: () => <Ecologie/>
  },
  {
    path:"/Manger",
    title: () =><p>'x'</p>,
    main: () => <p>manger</p>
  },
  {
    path:"/Boire",
    title: () =><p>'x'</p>,
    main: () => <p>Boire</p>
  },
  {
    path:"/Allergens",
    title: () =><p>'Voici un graphique présentant les potentiels allergènes présents dans votre produit.'</p>,
    main: () => <Allergens/>
  }
];

export default function SidebarExample() {
  return (
    <Router>
      <div id="menu-bar">
              <div className="button"><Link to="/"><img src={img1}></img></Link></div>
              <div className="button"><Link to="/BarChart"><img src={img2}></img></Link></div>
              <div className="button"><Link to="/Ecologie"><img src={img3}></img></Link></div>
              <div className="button"><Link to="/Manger"><img src={img4}></img></Link></div>
              <div className="button"><Link to="/Boire"><img src={img5}></img></Link></div>
              <div className="button"><Link to="/Allergens"><img src={img6}></img></Link></div>
        </div>

        <div id="container">
          <Switch>
            {routes.map((route, index) => (
              <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.title/>}
            />
            ))}
          </Switch>
          <Switch>
            {routes.map((route, index) => (
              <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main/>}
            />
            ))}
          </Switch>
        </div>
    </Router>
  );
}