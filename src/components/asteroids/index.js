import { useSelector } from 'react-redux';
import { asteroids } from '../../slices/tickerSlice';

function Asteroid ()
{
    const asteroid = useSelector( asteroids );


    return (
        <div className="dashboard-card">
            <div className="grid-row lato h2">
                <div>Name</div>
                <div>Minerals</div>
                <div>Current miner</div>
                <div>Position</div>
            </div>

            { asteroid &&
                asteroid.map( ( item, pos ) => (
                    <div key={ pos } className={ `grid-row lato h3 ${ item.minerals < 1 ?
                        "insuffient" : '' }` } >
                        <div>{ item.name }</div>
                        <div className="minerals">{ item.minerals }</div>
                        <div>{ item.currentMiner ? item.currentMiner.name : 0 }</div>
                        <div>{ `${ item.position.x },${ item.position.y }` } </div>
                    </div>
                ) ) }
        </div>
    );
}

export default Asteroid;
