import './Ecologie.css'
import label from './img/prize.png';
import React from "react"
import { arc } from "d3-shape" //créer un arc 
import { scaleLinear } from "d3-scale"
import { format } from "d3-format"


const Gauge = ({
    value = value,
    min = 0,
    max = 4,
    //label,
    //units,
}) => {
    const backgroundArc = arc()
        .innerRadius(0.65)
        .outerRadius(1)
        .startAngle(-Math.PI / 2)
        .endAngle(Math.PI / 2)
        .cornerRadius(1) //rendre les angles arrondis
        ()
    const percentScale = scaleLinear()
        .domain([min, max])
        .range([0, 1])
    const percent = percentScale(value)
    const angleScale = scaleLinear()
        .domain([0, 1])
        .range([-Math.PI / 2, Math.PI / 2])
        .clamp(true)
    const angle = angleScale(percent)
    const filledArc = arc()
        .innerRadius(0.65)
        .outerRadius(1)
        .startAngle(-Math.PI / 2)
        .endAngle(angle)
        .cornerRadius(1)
        ()
    const colorScale = scaleLinear() //faire le dégradé de couleur
        .domain([0, 1])
        .range(["#3ee638", "#ff0000"])
    const gradientSteps = colorScale.ticks(10)
        .map(value => colorScale(value))
    const markerLocation = getCoordsOnArc(
        angle,
        1 - ((1 - 0.65) / 2),
    )
    return (
        <div>
            <svg id="curseur" style={{ overflow: "visible" }}
                width="15em" //grosseur du curseur
                viewBox={[
                    -1, -1,
                    2, 1,
                ].join(" ")}>
                <defs>
                    <linearGradient
                        id="Gauge__gradient"
                        gradientUnits="userSpaceOnUse"
                        x1="-1"
                        x2="1"
                        y2="0">
                        {gradientSteps.map((color, index) => (
                            <stop
                                key={color}
                                stopColor={color}
                                offset={`${index
                                    / (gradientSteps.length - 1)
                                    }`}
                            />
                        ))}
                    </linearGradient>
                </defs>
                <path
                    d={backgroundArc}
                    fill="#dbdbe7"
                />
                <path
                    d={filledArc}
                    fill="url(#Gauge__gradient)"
                />
                <line
                    y1="-1"
                    y2="-0.65"
                    stroke="white"
                    strokeWidth="0.027"
                />
                <circle //boule du curseur
                    cx={markerLocation[0]}
                    cy={markerLocation[1]}
                    r="0.2"
                    stroke="#2c3e50"
                    strokeWidth="0.01"
                    fill={colorScale(percent)}
                />
                <path
                    d="M0.136364 0.0290102C0.158279 -0.0096701 0.219156 -0.00967009 0.241071 0.0290102C0.297078 0.120023 0.375 0.263367 0.375 0.324801C0.375 0.422639 0.292208 0.5 0.1875 0.5C0.0852272 0.5 -1.8346e-08 0.422639 -9.79274e-09 0.324801C0.00243506 0.263367 0.0803571 0.120023 0.136364 0.0290102ZM0.1875 0.381684C0.221591 0.381684 0.248377 0.356655 0.248377 0.324801C0.248377 0.292947 0.221591 0.267918 0.1875 0.267918C0.153409 0.267918 0.126623 0.292947 0.126623 0.324801C0.126623 0.356655 0.155844 0.381684 0.1875 0.381684Z"
                    transform={`rotate(${angle * (180 / Math.PI)
                        }) translate(-0.2, -0.33)`}
                    fill={colorScale(percent)}
                />
            </svg><br></br><br></br>
            <div style={{
                marginTop: "0.4em",
                fontSize: "1.5em",
                lineHeight: "1em",
                fontWeight: "900",
                fontFeatureSettings: "'zero', 'tnum' 1",
                color: colorScale(percent),
                textAlign: "center"
            }}>
                {format(",")(value)}
            </div>
        </div>
    )
}
const getCoordsOnArc = (angle, offset = 10) => [
    Math.cos(angle - (Math.PI / 2)) * offset,
    Math.sin(angle - (Math.PI / 2)) * offset,
]

class Eco extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
        return (
            
            <div class="container">
                {console.log(this.props.data.product.packaging_tags.length)}
                {console.log(this.props.data.product.packaging_tags)}
                {/* </div><div class="row align-items-center col-9" > */}
                    <div class="col-12 wrapper d-flex justify-content-center" id="blocHalf">
                        <div class="col-6 wrapper d-flex justify-content-center  align-self-center">
                            <Gauge value={this.props.data.product.packaging_tags.length}></Gauge>
                        </div>
                        <div class="col-6  align-self-center"><p>Nombre de packagings pour votre produit</p></div>
                    </div>
                </div>
                    
            //     <div class="row justify-content-between align-items-cente">
            //         <div class="col-5" id="blocHalf">
            //             <div class="container">
            //                 <div class="row">
            //                     <h4><b>Type de packaging</b></h4>
            //                 </div>
            //                 <div class="row">
            //                     <h4><br></br>
            //                         - Carton
            //                         <br></br>
            //                         - Plastique
            //                         <br></br>
            //                         - Barquette en plastique
            //                     </h4>
            //                 </div>
            //             </div>
            //         </div>
            //         <div class="col-5" id="blocHalf">
            //             <div class="container">
            //                 <div class="row">
            //                     <h4><b>L'origine du produit</b></h4><br></br>
            //                     <br></br><h4>FRANCE</h4>
            //                 </div>
            //             </div>

            //         </div>
            //     </div>

            //     <div class="row align-items-center" id="blocFull">
            //         <div class="col-6 wrapper d-flex justify-content-center">
            //             <img src={label}></img><br></br>

            //         </div>
            //         <div class="col-6 wrapper d-flex justify-content-center">
            //             <div class="container">
            //                 <div class="row">
            //                     <h4>Les différents labels</h4>
            //                 </div>
            //                 <div class="row align-items-center">
            //                     <h4><br></br>
            //                         - BIO
            //                         <br></br>
            //                         - Label Rouge
            //                     </h4>
            //                 </div>
            //             </div>
            //         </div>
            // </div>
        );
    }
}
export default Eco;
//https://wattenberger.com/blog/gauge