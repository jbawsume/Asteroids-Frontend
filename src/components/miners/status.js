import React from "react"

function Status ( props )
{
    if ( props.status === 0 )
    {
        return (
            <>
                Idle
            </>
        );
    }
    if ( props.status === 1 )
    {
        return (
            <>
                Traveling
            </>
        );
    }
    if ( props.status === 2 )
    {
        return (
            <>
                Mining
            </>
        );
    }
    if ( props.status === 3 )
    {
        return (
            <>
                Transfering
            </>
        );
    }



}

export default Status;
