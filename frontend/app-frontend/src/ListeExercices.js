import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Exercice = props => (
        <tr>
            <td>{props.exercice.username}</td>
            <td>{props.exercice.description}</td>
            <td>{props.exercice.duration}</td>
            <td>{props.exercice.calories}</td>
            <td>{props.exercice.date.substring(0, 10)}</td>
            <td>
                <Link to={"/edit/" + props.exercice._id}>Modifier</Link> | <a href="#" onClick={() => { props.deleteExercice(props.exercice._id) }}>Supprimer</a>
            </td>
        </tr>
)

class ExercicesList extends React.Component {
    constructor(props) {
        super(props);

        this.deleteExercice = this.deleteExercice.bind(this)

        this.state = { exercices: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercices/')
            .then(response => {
                this.setState({ exercices: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteExercice(id) {
        axios.delete('http://localhost:5000/exercices/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            exercices: this.state.exercices.filter(el => el._id !== id)
        })
    }

    exerciceList() {
        return this.state.exercices.map(currentexercice => {
            return <Exercice exercice={currentexercice} deleteExercice={this.deleteExercice} key={currentexercice._id} />;
        })
    }

    render() {
        return (
            <div class="container wrapper d-flex justify-content-center">
            <div className="boxshadow col-10 table-responsive-sm">
                <br></br>
                <table className="table table-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th>User</th>
                            <th>Description</th>
                            <th>Durée</th>
                            <th>Calories</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciceList()}
                    </tbody>
                </table>
                <br></br>
            </div>
            </div>
        )
    }
}

export default ExercicesList;