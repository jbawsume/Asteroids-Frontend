import { useState, useEffect } from 'react';
import planet1 from "../../../media/planet-1.png"
import planet2 from "../../../media/planet-2.png"
import planet3 from "../../../media/planet-3.png"
function Planet ( { width, item } )
{
    const [ xAxis, setxAxis ] = useState( 0 );
    const [ yAxis, setyAxis ] = useState( 0 );
    const [ planetUrl, setplanetUrl ] = useState( '' )
    useEffect( () =>
    {
        setxAxis( ( item.position.x * width ) / 1000 )
        setyAxis( ( item.position.y * width ) / 1000 )
        if ( item.name === 'Planet 1' )
        {
            setplanetUrl( planet1 )
        }
        if ( item.name === 'Planet 2' )
        {
            setplanetUrl( planet2 )
        }
        if ( item.name === 'Planet 3' )
        {
            setplanetUrl( planet3 )
        }
    }, [ item ] )

    return (
        <div style={ {
            position: 'absolute',
            left: xAxis,
            top: yAxis,
            transform: 'translate(-50%,-50%)'
        } }><div> <img style={ {
            width: 50,
            height: 50
        } } src={ planetUrl } alt="planet icon " /></div>

            <div style={ { position: 'absolute', bottom: -10, left: -10 } } className={ `planet-text lato ${ item.minerals >= 1000 ?
                "suffient" : '' }` }>{ item.minerals }/1000</div>
        </div>
    );
};

export default Planet;
