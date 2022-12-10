import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { asteroids } from '../../../slices/tickerSlice';
import Asteroid from "./asteroid"

function Asteroids ( { width } )
{
    const asteroid = useSelector( asteroids );

    return (
        <>
            { asteroid &&
                asteroid.map( ( item, pos ) => (
                    <Asteroid key={ pos } item={ item } width={ width } />
                ) ) }
        </>
    );
};

export default Asteroids;
