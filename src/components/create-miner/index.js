import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { miners } from '../../slices/tickerSlice';
import { handleCheckMinerNameExists } from "../../utils"

function CreateMiner ( { planet } )
{
    const [ name, setName ] = useState( '' );
    const [ carryCapacity, setCarryCapacity ] = useState( 0 );
    const [ travelSpeed, setTravelSpeed ] = useState( 0 );
    const [ miningSpeed, setMiningSpeed ] = useState( 0 );
    const [ total, setTotal ] = useState( 200 );
    const [ submitDisabled, setSubmitDisabled ] = useState( true );
    const [ showSuccess, setShowSuccess ] = useState( false );
    const [ nameError, setNameError ] = useState( '' );

    const minerList = useSelector( miners );
    useEffect( () =>
    {
        setShowSuccess( false )
    }, [] )

    useEffect( () =>
    {
        let sum = travelSpeed + carryCapacity + miningSpeed
        setTotal( 200 - sum )
        if ( handleCheckMinerNameExists( { minerItems: minerList, minerName: name } ) )
        {
            setNameError( 'This name is already taken.' );
            setSubmitDisabled( true )
        }
        if ( !name || travelSpeed === 0 || carryCapacity === 0 || miningSpeed === 0 || sum < 0 )
        {
            setSubmitDisabled( true )
        } else
        {
            setSubmitDisabled( false )
        }
    }, [ travelSpeed, carryCapacity, miningSpeed, name, minerList ] )

    function handleTravelSpeed ( event )
    {
        const value = parseInt( event.target.value, 10 );
        setTravelSpeed( value );
    }
    function handleMinerName ( event )
    {
        setNameError( '' );
        setName( event.target.value );
    }
    function handleCarryCapacity ( event )
    {
        const value = parseInt( event.target.value, 10 );
        setCarryCapacity( value );
    }
    function handleMiningSpeed ( event )
    {
        const value = parseInt( event.target.value, 10 );
        setMiningSpeed( value );
    }

    const saveShippingAddress = async () =>
    {

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
                        onChange={ handleMinerName } /></div>
                    { nameError !== '' && <div className="form-error">{ nameError }</div> }
                    <div className="label">Planet</div>
                    <div className="full-input" >{ planet.name }</div>
                    <div className="title pt-31 pb-31">Assign points</div>
                    <div className="form-grid">
                        <div>
                            <div className="label">carryCapacity</div>
                            <div className={ `full-input` } >
                                <input
                                    type="number"
                                    value={ carryCapacity }
                                    onChange={ handleCarryCapacity } />
                            </div>

                        </div>
                        <div>
                            <div className="label">travelSpeed</div>
                            <div className={ `full-input` } >
                                <input
                                    type="number"
                                    value={ travelSpeed }
                                    onChange={ handleTravelSpeed } />
                            </div>

                        </div>
                        <div>
                            <div className="label">miningSpeed</div>
                            <div className={ `full-input` } >
                                <input
                                    type="number"
                                    value={ miningSpeed }
                                    onChange={ handleMiningSpeed } />
                            </div>

                        </div>
                    </div>
                    <div className={ `form-total pb-31  ${ total < 0 ? 'error' : '' }` }>Total: { total }/200</div>
                    <div className="w-full text-center">
                        <button onClick={ saveShippingAddress } disabled={ submitDisabled } className="submit-btn pointer">
                            Save</button>
                    </div>

                </div>
                :
                <div className="text-center">The miner was successfully created</div>
        }
    </> );
}

export default CreateMiner;
