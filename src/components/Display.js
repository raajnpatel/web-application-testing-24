import React from 'react';
import "../App.css"

const Display = (props) => {
    const {strike, balls, score, base, outs, inning} = props;
    return (
        <div className = "Home">
            <h2 className="Strike">Strikes: {strike}</h2>
            <h3 className="Balls">Balls: {balls}</h3>
            <h2 className="Outs">Outs: {outs}</h2>
            <h3 className="Innings">Inning: {inning}</h3>

            <h1 className="Score">Score: {score}</h1>
            <h2 className="Base">Base: {base}</h2>
        </div>
    )
};

export default Display;