import { useState, useEffect } from 'react';

function Asteroid ( { width, item } )
{
    const [ xAxis, setxAxis ] = useState( 0 );
    const [ yAxis, setyAxis ] = useState( 0 );
    useEffect( () =>
    {
        setxAxis( ( item.position.x * width ) / 1000 )
        setyAxis( ( item.position.y * width ) / 1000 )
    }, [ item ] )

    return (
        <div style={ {
            position: 'absolute',
            left: xAxis,
            top: yAxis,
            transform: 'translate(-50%,-50%)'
        } }>
            <span className="icon-asteroids"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span><span className="path15"></span><span className="path16"></span><span className="path17"></span><span className="path18"></span><span className="path19"></span><span className="path20"></span><span className="path21"></span><span className="path22"></span><span className="path23"></span><span className="path24"></span><span className="path25"></span><span className="path26"></span><span className="path27"></span><span className="path28"></span><span className="path29"></span><span className="path30"></span><span className="path31"></span><span className="path32"></span><span className="path33"></span><span className="path34"></span><span className="path35"></span><span className="path36"></span></span>
        </div>
    );
};

export default Asteroid;
