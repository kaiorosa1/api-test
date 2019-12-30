import React from 'react';
import './Planet.css'

const Planet = (props) =>{

    return (
        <div className="ba shadow-3 pa2 ma2">
            <div>
            <img src="moon.jpg" alt="moon planet"/>
            </div>
            <p>{props.planet.name}</p>
            <p>{props.planet.climate}</p>
            <p>{props.planet.population}</p>
        </div>
    );
}

export default Planet;