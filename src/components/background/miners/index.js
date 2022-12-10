import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { miners } from '../../../slices/tickerSlice';
import Miner from "./miner"

function Miners ( { width } )
{
    const miner = useSelector( miners );

    return (
        <>
            { miner &&
                miner.map( ( item, pos ) => (
                    <Miner key={ pos } item={ item } width={ width } />
                ) ) }
        </>
    );
};

export default Miners;
