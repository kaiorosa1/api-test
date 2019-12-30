import React from 'react';
import Planet from './Planet';

const PlanetList = ({planets}) =>{
    return(
        <div className = "ma5">
            {
            planets.map((planet,i)=>{
                return <Planet key={i} planet={planet}/>
            })
            }
        </div>
    );
}

export default PlanetList