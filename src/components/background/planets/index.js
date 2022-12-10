import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { planets } from '../../../slices/tickerSlice';
import Planet from "./planet"

function Planets ( { width } )
{
    const planet = useSelector( planets );

    return (
        <>
            { planet &&
                planet.map( ( item, pos ) => (
                    <Planet key={ pos } item={ item } width={ width } />
                ) ) }
        </>
    );
};

export default Planets;
