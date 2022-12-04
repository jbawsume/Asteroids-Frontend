import React, { useState } from "react";

function Popup ( { children, buttonProps } )
{
    const [ displayPopup, setDisplayPopup ] = useState( false );

    return (
        <div>
            <div
                className="pointer"
                onClick={ () => setDisplayPopup( true ) }
            >
                { buttonProps }
            </div>
            { displayPopup && (
                <div className="overlay-bg">
                    <div className="popup">
                        <div onClick={ () => setDisplayPopup( false ) } className="close-popup"><span className="icon-delete"></span></div>
                        <div>{ children }</div>
                    </div>
                </div>
            ) }
        </div>
    )
}

export default Popup;