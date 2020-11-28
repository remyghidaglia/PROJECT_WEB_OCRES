import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const state = {
    labels: ['Lait', 'Soja', 'Gluten',
        'Fruit à coque', 'Viande', 'Poisson', 'Crustacé'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: [
                '#2935e0',
                '#8621eb',
                '#d021a7',
                '#26d1da',
                '#55f798',
                '#ff4444',
                '#ff963f'
            ],
            hoverBackgroundColor: [
                '#7980e3',
                '#b277ed',
                '#d068b8',
                '#66c5ca',
                '#7cd5a1',
                '#d86666',
                '#eba56c'
            ],
            data: [0,100/3, 100/3, 100/3, 0, 0, 0] //lait, soja, gluten, fruit à coque, viande, poisson, crustacé
        }
    ]
}

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-12">
                        <h3 id="ecolo">Page allergènes</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12" style={{height: "130px"}}>
                        <h3></h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <Doughnut
                            data={state}
                            options={{
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                        />
                    </div>
                </div>

            </div>
        );
    }
}