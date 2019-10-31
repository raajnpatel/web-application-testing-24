import React from 'react';

const Display = (props) => {
    const {strike, balls} = props;
    return (
        <div>
            <h2>Strikes: {strike}</h2>
            <h3>Balls: {balls}</h3>
        </div>
    )
};

export default Display;