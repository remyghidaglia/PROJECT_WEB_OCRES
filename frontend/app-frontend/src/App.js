import React from "react";
import img1 from './img/info.png';
import img2 from './img/piechart.png';
import img3 from './img/user.png';
import Formulaire from './Admin';
import New from './User';
import Liste from './ListeExercices';
import BarChart from './chart_100g.js';
import Ecologie from './Ecologie';
import Nutriscore from './Nutriscore';
import Score from './Score.js';
import Tags from './Tags';
import Exos from './ListeExercices';
import './App.css';
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
    main: (data) => <BarChart data={data} />

  },
  {
    title: <p>Vous trouverez ici les indications sur l'impact écologique de votre produit.</p>,
    main: (data) =>  <Ecologie data={data} />
  },
  {
    title: <p>Voici les différents tags en rapport avec votre produit</p>,
    main: (data) =>  <Tags data={data} />
  },
  {
    title: <p>Voici le score nutritif de votre aliment</p>,
    main: (data) =>  <Score data={data} />
  },
  {
    title: <p>Quel est le Nutriscore de votre produit ?</p>,
    main: (data) =>  <Nutriscore data={data} />
  },
  {
    title: <p>Voici un récapitulatif de vos entraînements physiques.</p>,
    main: () => <Exos/>
  }
];

class SidebarExample extends React.Component{
  constructor(props) {
    super(props);
    this.onSubmit=this.onSubmit.bind(this)
    this.state = {
      error: null,
      isLoaded: false,
      product: []
    };
  }
  
  onSubmit(node){
    fetch("https://world.openfoodfacts.org/api/v0/product/"+ node.value)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            product: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {

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
                children={<Formulaire callback={this.onSubmit}/>}
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
                children={<Widgets data={this.state.product} widgets={WidgetsData}/>}
              />
              <Route path="/edit/:id" component={EditExercise} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default SidebarExample;

const Widgets = ({data, widgets}) =>{
  return (
  <>
    {widgets.map(w => (
      <>
      {w.title} 
      {w.main(data)}
      </>
    ))}
  </>)
}