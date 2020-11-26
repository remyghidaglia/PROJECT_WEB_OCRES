import React from 'react';
import './Admin.css'

export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container wrapper d-flex justify-content-center">
                <div id="fenetre" class="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-xs-8">
                    <form>
                        <h3>Un restaurant à ajouter ?</h3><br></br>
                        <h5 class="text-center">Coordonnées</h5>
                        <label><b>Nom du restaurant</b></label>
                        <input type="text" placeholder="Nom du restaurant" name="name" required></input>
                        <label><b>Nom du gérant</b></label>
                        <input type="text" placeholder="Nom du gérant" name="gérant" required></input>
                        <label><b>Email</b></label>
                        <input type="text" placeholder="Email" name="email" required></input>
                        <label><b>Téléphone</b></label>
                        <input type="text" placeholder="Téléphone : 01 xx xx xx xx" name="tel" required></input>
                        <label><b>Page web associé</b></label>
                        <input type="text" placeholder="Page web" name="web"></input><br></br><br></br>


                        <h5 class="text-center">Informations</h5>
                        <label><b>Type de nourriture servi</b></label><br></br>
                        <select>
                            <option value="fastfood">Fast food</option>
                            <option selected value="healthy">Healthy</option>
                            <option value="vegetarien">Végétarien</option>
                            <option value="vegan">Vegan</option>
                            <option value="italien">Italien</option>
                            <option value="espagnol">Espagnol</option>
                            <option value="asiatique">Asiatique</option>
                            <option value="indien">Indien</option>
                            <option value="français">Variété française</option>
                            <option value="maghreb">Maghrebin</option>
                            <option value="greque">Greque</option>
                            <option value="latino">Latino</option>
                        </select><br></br><br></br>
                        <label><b>Prix</b></label>
                        <input type="text" placeholder="Prix moyen (exemple : $,$$,$$$,$$$$)" name="web"></input>
                        <label><b>Temps de préparation</b></label>
                        <input type="text" placeholder="Temps de préparation (en minutes) (exemple : 5)" name="web"></input><br></br><br></br>

                        <h5 class="text-center">Localisation</h5>
                        <label><b>Adresse</b></label>
                        <input type="text" placeholder="Adresse" name="adresse" required></input>

                        <div class="row">
                            <div class="col-6">
                                <label><b>Ville</b></label>
                                <input type="text" placeholder="Ville" name="ville" required></input>
                            </div>
                            <div class="col-6">
                                <label><b>Code postal</b></label>
                                <input type="text" placeholder="Code postal" name="codePostal" required></input>
                            </div>
                        </div>   
                        <label><b>Pays</b></label>
                        <input type="text" placeholder="Pays" name="pays" required></input>                    
                        <br></br>
                        <input type="submit" id='submit' value='Envoyer'></input><br></br>
                    </form>
                </div>
            </div>
        );
    }
}