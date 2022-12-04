import React, { useState, useEffect } from "react";
import Status from "./status"


function Miners ( { miner } )
{
    const [ minerHistory, setMinerHistory ] = useState( null );
    const [ showHistory, setShowHistory ] = useState( true );
    useEffect( () =>
    {
        async function getdata ()
        {
            try
            {
                let url = `https://asteroids.dev.mediasia.cn/history?minerId=${ miner._id }`
                const response = await fetch(
                    url,
                    {
                        method: "GET",
                    }
                );
                const data = await response.json();

                if ( data )
                {
                    setMinerHistory( data )
                    setShowHistory( false )
                }
            } catch ( error )
            {
                console.log( error );
                return;
            }
        }
        setShowHistory( true )
        getdata();
    }, [] )

    return ( <>
        <div className="title">History of { miner.name }</div>
        {
            showHistory ?
                <div className="text-center pt-31 size24"><span class="icon-loader"></span></div>
                :
                <div className="dashboard-card history pt-31">
                    <div className="grid-row lato h2">
                        <div>Date</div>
                        <div>Year</div>
                        <div>Planet</div>
                        <div>carryCapacity</div>
                        <div>travelSpeed</div>
                        <div>miningSpeed</div>
                        <div>Position</div>
                        <div>Status</div>
                    </div>

                    { minerHistory &&
                        minerHistory.slice( 0, 9 ).map( ( item, pos ) => (
                            <div className={ `grid-row lato h3 ${ item.minerals >= 1000 ?
                                "suffient" : '' }` } >
                                <div>{ item.createdAt }</div>
                                <div>{ item.year }</div>
                                <div>{ item.planet }</div>
                                <div>{ `${ item.position.x }/${ item.position.y }` }</div>
                                <div>{ item.speed.travel } </div>
                                <div>{ item.speed.mining } </div>
                                <div>{ `${ item.position.x },${ item.position.y }` }</div>
                                <div>
                                    <Status status={ item.status } />
                                </div>
                            </div>
                        ) ) }
                </div>

        }
    </>
    );
}

export default Miners;
