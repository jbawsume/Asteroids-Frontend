import { useSelector } from 'react-redux';
import { miners } from '../../slices/tickerSlice';
import Status from "./status"
import Popup from '../popup'
import History from './history'

function Miners ()
{
    const miner = useSelector( miners );


    return (
        <div className="dashboard-card miner overflow-scroll">
            <div className="grid-row lato h2">
                <div>Name</div>
                <div>Planet</div>
                <div>carryCapacity</div>
                <div>travelSpeed</div>
                <div>miningSpeed</div>
                <div>Position</div>
                <div>Status</div>
            </div>

            { miner &&
                miner.map( ( item, pos ) => (
                    <div key={ pos } className={ `grid-row lato h3 ${ item.minerals === item.carryCapacity ?
                        "suffient" : '' }` } >
                        <div>
                            <Popup buttonProps={
                                <>
                                    <div className="link">{ item.name } </div>  </>
                            }>
                                <History miner={ item } />
                            </Popup>
                        </div>
                        <div className="minerals">{ item.planet.name }</div>
                        <div>{ `${ item.minerals },${ item.carryCapacity }` }</div>
                        <div>{ item.travelSpeed } </div>
                        <div >{ item.miningSpeed }</div>
                        <div>{ item.currentMiner ? item.currentMiner.name : 0 }</div>
                        <div>
                            <Status status={ item.status } />
                        </div>
                    </div>
                ) ) }
        </div>
    );
}

export default Miners;
