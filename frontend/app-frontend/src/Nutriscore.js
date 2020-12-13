import React from 'react';
import './App.css';

  

class Nutriscore extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <>
           <div className="boxshadow">
             <p style={{fontSize:"30px",color:"white"}}>Le Nutriscore a pour notation les lettres de A à E, du produit le plus sain au plus mauvais pour la santé</p>
             <p style={{fontSize:"60px",color:"white"}}>{(this.props.data.product.nutriscore_grade)}</p>
          </div>
            </>
        );
    }
}
export default Nutriscore;