import React from "react"

function Status ( props )
{
    if ( props.status === 1 )
    {
        return (
            <>
                Idle
            </>
        );
    }
    if ( props.status === 2 )
    {
        return (
            <>
                Leaving planet
            </>
        );
    }
    if ( props.status === 3 )
    {
        return (
            <>
                Mining
            </>
        );
    }
    if ( props.status === 4 )
    {
        return (
            <>
                Traveling back to planet
            </>
        );
    }
    if ( props.status === 5 )
    {
        return (
            <>
                Transferring minerals to planet
            </>
        );
    }


}

export default Status;
