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
                        <h3>Une modification à apporter ?</h3><br></br>
                        
                        <input type="submit" id='submit' value='Envoyer'></input><br></br>
                    </form>
                </div>
            </div>
        );
    }
}