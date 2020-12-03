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
            data: [0, 100 / 3, 100 / 3, 100 / 3, 0, 0, 0] //lait, soja, gluten, fruit à coque, viande, poisson, crustacé
        }
    ]
}

class Allergies extends React.Component {
    render() {
        return (
            <div className="boxshadow">
                <Doughnut
                    data={state}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        title:{
                            display:true,
                            text:'My allergens graph',
                            fontSize:20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}
export default Allergies;