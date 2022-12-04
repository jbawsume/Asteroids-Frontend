import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { miners } from '../../slices/tickerSlice';
import { handleCheckMinerNameExists } from "../../utils"
function CreateMiner ( { planet } )
{
    const [ name, setName ] = useState( '' );

    const [ carryCapacity, setCarryCapacity ] = useState( '' );
    const [ travelSpeed, setTravelSpeed ] = useState( '' );
    const [ miningSpeed, setMiningSpeed ] = useState( '' );
    const [ total, setTotal ] = useState( '' );
    const [ showSuccess, setShowSuccess ] = useState( false );
    const [ nameError, setNameError ] = useState( '' );
    const [ carryCapacityError, setCarryCapacityError ] = useState( '' );
    const [ travelSpeedError, setTravelSpeedError ] = useState( '' );
    const [ miningSpeedError, setMiningSpeedError ] = useState( '' );


    const minerList = useSelector( miners );
    useEffect( () =>
    {
        setShowSuccess( false )
    }, [] )

    const saveShippingAddress = async () =>
    {
        if ( !name )
        {
            setNameError( 'Name Can not be left blank' );
            return false;
        }
        if ( !carryCapacity )
        {
            setCarryCapacityError( 'carryCapacity Can not be left blank' );
            return false;
        }
        if ( !travelSpeed )
        {
            setTravelSpeedError( 'carryCapacity Can not be left blank' );
            return false;
        }
        if ( !miningSpeed )
        {
            setMiningSpeedError( 'carryCapacity Can not be left blank' );
            return false;
        }
        if ( handleCheckMinerNameExists( { minerItems: minerList, minerName: name } ) )
        {
            setNameError( 'This name is already taken.' );
            return false;
        }
        const document = {
            name,
            planet: planet._id,
            x: planet.position.x,
            y: planet.position.y,
            carryCapacity,
            travelSpeed,
            miningSpeed,
            status: 0,
            minerals: 0,
            angle: 0,

        };
        let url = 'https://asteroids.dev.mediasia.cn/miners'
        try
        {
            const response = await fetch(
                url,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify( document )
                }
            );
            const data = await response.json();

            if ( data )
            {
                setShowSuccess( true )
            }
        } catch ( error )
        {
            console.log( error );

            return;
        }
    }


    return ( <>
        {
            !showSuccess ?

                <div className="form lato">

                    <div className="title">Create a miner</div>
                    <div className="label">Name</div>
                    <div className={ `full-input  ${ nameError !== '' ? 'error' : '' }` } ><input
                        type="text"
                        value={ name }
                        onChange={ e => setName( e.target.value ) } /></div>
                    { nameError !== '' && <div className="form-error">{ nameError }</div> }
                    <div className="label">Planet</div>
                    <div className="full-input" >{ planet.name }</div>
                    <div className="title pt-31 pb-31">Assign points</div>
                    <div className="form-grid">
                        <div>
                            <div className="label">carryCapacity</div>
                            <div className="full-input" >
                                <input
                                    type="text"
                                    value={ carryCapacity }
                                    onChange={ e => setCarryCapacity( e.target.value ) } />
                            </div>
                        </div>
                        <div>
                            <div className="label">travelSpeed</div>
                            <div className="full-input" >
                                <input
                                    type="text"
                                    value={ travelSpeed }
                                    onChange={ e => setTravelSpeed( e.target.value ) } />
                            </div>
                        </div>
                        <div>
                            <div className="label">miningSpeed</div>
                            <div className="full-input" >
                                <input
                                    type="text"
                                    value={ miningSpeed }
                                    onChange={ e => setMiningSpeed( e.target.value ) } />
                            </div>
                        </div>
                    </div>
                    <div className="form-total pb-31">Total:</div>
                    <div className="w-full text-center">
                        <button onClick={ saveShippingAddress } className="submit-btn">
                            Save</button>
                    </div>

                </div>
                :
                <div className="text-center">The miner was successfully created</div>
        }
    </> );
}

export default CreateMiner;
