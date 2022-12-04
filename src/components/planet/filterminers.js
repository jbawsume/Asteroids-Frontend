import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { miners } from '../../slices/tickerSlice';
import Status from "../miners/status"

function Miners ( { planet } )
{
    const miner = useSelector( miners );
    const [ minerList, setMinerList ] = useState( [] );
    useEffect( () =>
    {
        setMinerList( miner.filter( item => item.planet._id === planet._id ) )
    }, [ miner ] )

    return ( <>
        <div className="title">List of miners of { planet.name }</div>
        <div className="dashboard-card filter-miner overflow-scroll pt-31">
            <div className="grid-row lato h2">
                <div>Name</div>
                <div>carryCapacity</div>
                <div>travelSpeed</div>
                <div>miningSpeed</div>
                <div>Position</div>
                <div>Status</div>
            </div>

            { minerList &&
                minerList.map( ( item, pos ) => (
                    <div key={ pos } className={ `grid-row lato h3 ` } >
                        <div>
                            { item.name }
                        </div>
                        <div className={ ` ${ item.minerals === item.carryCapacity ?
                            "minerals" : '' }` }>{ `${ item.minerals }/${ item.carryCapacity }` }</div>
                        <div>{ item.travelSpeed } </div>
                        <div >{ item.miningSpeed }</div>
                        <div>{ item.currentMiner ? item.currentMiner.name : 0 }</div>
                        <div>
                            <Status status={ item.status } />
                        </div>
                    </div>
                ) ) }
        </div>
    </> );
}

export default Miners;
