import React from 'react';
import axios from 'axios';
import './Admin.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class EditExercise extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeCalories = this.onChangeCalories.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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
        axios.get('http://localhost:5000/exercices/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    description: response.data.description,
                    duration: response.data.duration,
                    calories: response.data.calories,
                    date: new Date(response.data.date)
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
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
            calories: this.state.calories,
            date: this.state.date
        }

        console.log(exercise);

        axios.post('http://localhost:5000/exercices/update/' + this.props.match.params.id, exercise)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div class="row justify-content-center">
                <div id="fenetre" class="col-xl-6 col-lg-6 col-md-6 col-sm-7 col-xs-4">
                    <form onSubmit={this.onSubmit}>
                    <h4><b>Modifier les les données de l'activité physique</b></h4><br></br>
                        <div className="form-group">
                            <label><b>Nom d'utilisateur</b> </label>
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
                        </div>
                        <div className="form-group">
                            <label><b>Description</b></label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                            />
                        </div>
                        <div className="form-group">
                            <label><b>Durée</b></label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.duration}
                                onChange={this.onChangeDuration}
                            />
                        </div>
                        <div className="form-group">
                            <label><b>Calories brûlées</b></label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.calories}
                                onChange={this.onChangeCalories}
                            />
                        </div>
                        <div className="form-group">
                            <label><b>Date</b></label>
                            <div>
                                <DatePicker
                                    selected={this.state.date}
                                    onChange={this.onChangeDate}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <input type="submit"  id='submit' value="Valider la modification" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditExercise;
