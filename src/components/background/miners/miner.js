import { useState, useEffect } from 'react';

function Miner ( { width, item } )
{
    const [ xAxis, setxAxis ] = useState( 0 );
    const [ yAxis, setyAxis ] = useState( 0 );
    useEffect( () =>
    {
        setxAxis( ( item.x * width ) / 1000 )
        setyAxis( ( item.y * width ) / 1000 )
    }, [ item, width ] )

    return (
        <div className="miner" style={ {
            position: 'absolute',
            left: xAxis,
            top: yAxis,
            transform: `translate(-50%,-50%) rotate(${ item.angle }deg) `
        } }>
            <span className="icon-miner"></span>
        </div>
    );
};

export default Miner;
