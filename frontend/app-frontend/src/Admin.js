import React from 'react';
import './Admin.css'

class NameForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="wrapper d-flex justify-content-center">

                <div class="container">
                    <div class="row justify-content-center">
                        <div id="fenetre" class="col-xl-8 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <form id="code">
                                <h4><b>Veuillez rentrer le code de votre produit</b></h4><br></br>
                                <input type="text" placeholder="Code du produit" name="code" required></input>
                                <br></br>
                                <input type="submit" id='codeB' value='Valider'></input><br></br>
                            </form>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div id="fenetre" class="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-xs-8">
                            <form>
                                <h4><b>Rentrez les ventes et statistiques du produit</b></h4><br></br>
                                <h5 class="text-center">Descriptif</h5>
                                <label><b>Nom du produit</b></label>
                                <input type="text" placeholder="Nom du produit" name="name" required></input>
                                <label><b>Marque du produit</b></label>
                                <input type="text" placeholder="Nom du produit" name="marque" required></input>
                                <label><b>Code barre</b></label>
                                <input type="text" placeholder="Code bare" name="codeBarre" required></input>
                                <br></br><br></br>

                                <h5 class="text-center">Informations</h5>
                                <label><b>Prix de vente moyen</b></label>
                                <input type="text" placeholder="Prix de vente moyen" name="prixV" required></input>
                                <label><b>Prix de production</b></label>
                                <input type="text" placeholder="Prix de production moyen" name="prixP"></input><br></br><br></br>

                                <h5 class="text-center">Statistiques</h5>
                                <div class="row">
                                    <div class="col-6">
                                        <label><b>Janvier</b></label>
                                        <input type="text" placeholder="Statistiques de ventes en Janvier" name="janvier" required></input>
                                    </div>
                                    <div class="col-6">
                                    <label><b>Février</b></label>
                                        <input type="text" placeholder="Statistiques de ventes en Février" name="février" required></input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <label><b>Mars</b></label>
                                        <input type="text" placeholder="Statistiques de ventes en Mars" name="mars" required></input>
                                    </div>
                                    <div class="col-6">
                                    <label><b>Avril</b></label>
                                        <input type="text" placeholder="Statistiques de ventes en Avril" name="avril" required></input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <label><b>Mai</b></label>
                                        <input type="text" placeholder="Statistiques de ventes en Mai" name="mai" required></input>
                                    </div>
                                    <div class="col-6">
                                    <label><b>Juin</b></label>
                                        <input type="text" placeholder="Statistiques de ventes en Juin" name="juin" required></input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <label><b>Juillet</b></label>
                                        <input type="text" placeholder="Statistiques de ventes en Juillet" name="juillet" required></input>
                                    </div>
                                    <div class="col-6">
                                    <label><b>Août</b></label>
                                        <input type="text" placeholder="Statistiques de ventes en Août" name="aout" required></input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <label><b>Septembre</b></label>
                                        <input type="text" placeholder="Statistiques de ventes en Septembre" name="septembre" required></input>
                                    </div>
                                    <div class="col-6">
                                    <label><b>Octobre</b></label>
                                        <input type="text" placeholder="Statistiques de ventes en Octobre" name="Octobre" required></input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <label><b>Novembre</b></label>
                                        <input type="text" placeholder="Statistiques de ventes en Novembre" name="novembre" required></input>
                                    </div>
                                    <div class="col-6">
                                    <label><b>Décembre</b></label>
                                        <input type="text" placeholder="Statistiques de ventes en Décembre" name="decembre" required></input>
                                    </div>
                                </div>
                                <br></br>
                                <input type="submit" id='submit' value='Envoyer'></input><br></br>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NameForm;