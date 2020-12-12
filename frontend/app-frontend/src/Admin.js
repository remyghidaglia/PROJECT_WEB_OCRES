import React from 'react';
import './Admin.css';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeCalories = this.onChangeCalories.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleFormSubmit=props.callback
        this.state = {
            username: '',
            description: '',
            duration: 0,
            calories: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    onChangeCalories(e) {
        this.setState({
            calories: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);

        axios.post('http://localhost:5000/exercices/add', exercise)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div class="wrapper d-flex justify-content-center">

                <div class="container">
                <div class="row justify-content-center">
                        <div id="fenetre" class="col-xl-8 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <h4><b>Veuillez rentrer le code de votre produit</b></h4><br></br>
                                <input type="text" placeholder="Code du produit" name="code" id="barcode" required></input>
                                <br></br>
                                <input type="submit" id='codeB' onClick={() => {this.handleFormSubmit(document.getElementById("barcode"))}} value='Valider'></input>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div id="fenetre" class="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-xs-8">
                            <form onSubmit={this.onSubmit}>
                                <h4><b>Rentrez vos exercices physiques</b></h4><br></br>
                                <h5 class="text-center">Descriptif</h5>
                                <label><b>Utilisateur</b></label>
                                {/* <input type="text" placeholder="Utilisateur" name="name" required value={this.state.username} onChange={this.onChangeUsername}></input> */}
                                <select ref="userInput"
                                    required
                                    className="form-control"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}>
                                    {
                                        this.state.users.map(function (user) {
                                            return <option
                                                key={user}
                                                value={user}>{user}
                                            </option>;
                                        })
                                    }
                                </select>
                                <label><b>Description</b></label>
                                <input type="text" placeholder="Description" name="marque" required value={this.state.description} onChange={this.onChangeDescription}>
                                </input>
                                <label><b>Durée</b></label>
                                <input type="text" placeholder="Durée" name="durée" required value={this.state.duration} onChange={this.onChangeDuration}></input>
                                <label><b>Calories brûlées</b></label>
                                <input type="text" placeholder="Calories" name="calories" required value={this.state.calories} onChange={this.onChangeCalories}></input>
                                <label><b>Date</b></label>
                                <div>
                                    <DatePicker
                                        selected={this.state.date}
                                        onChange={this.onChangeDate}
                                    />
                                </div>
                                <br></br><br></br>
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