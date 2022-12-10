import { useRef, useState, useEffect } from 'react';
import gridbackground from '../../media/gridbackground.png';
import Asteroids from "./asteroids"
import Planets from "./planets"
import Miners from "./miners"

function Background ()
{
    const divRef = useRef( null );
    const [ width, setWidth ] = useState( 0 );

    useEffect( () =>
    {
        if ( divRef.current )
        {
            const { width } = divRef.current.getBoundingClientRect();
            setWidth( width );
        }
    }, [] )

    return (
        <div ref={ divRef } style={ {
            position: 'relative',
        } }>

            <img src={ gridbackground } alt="backend  miner" />
            <Asteroids width={ width } />
            <Planets width={ width } />
            <Miners width={ width } />
        </div>
    );
};

export default Background;
