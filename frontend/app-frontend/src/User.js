import React from 'react';
import './Admin.css';
import axios from 'axios';

class NewUser extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            user: []
        }
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({

            username: ''
        })

    }

    render() {
        return (
            <div class="wrapper d-flex justify-content-center">

                <div class="container">
                    <div class="row justify-content-center">
                        <div id="fenetre" class="col-xl-8 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <form id="code" onSubmit={this.onSubmit}>
                                <h4><b>Veuillez rentrer un nouvel utilisateur</b></h4><br></br>
                                <input type="text" placeholder="Nom utilisateur" name="user" required value={this.state.username} onChange={this.onChangeUsername}></input>
                                <br></br>
                                <input type="submit" id='codeB' value='Valider'></input><br></br>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default NewUser;