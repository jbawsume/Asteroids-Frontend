import { useState } from "react";
import Planet from "../planet"
import Asteroid from "../asteroids"
import Miners from "../miners"

function Dashboard ()
{
    const [ selectedTab, setSelectedTab ] = useState( "Planets" );

    return (
        <div className="relative">
            <div className="row tab-bar">
                <div onClick={ () => setSelectedTab( 'Miners' ) } className={ `tab-link pointer ${ selectedTab === 'Miners' ?
                    "selected" : '' }` }><span className="icon-miner"></span><div className="text lato">Miner</div></div>
                <div onClick={ () => setSelectedTab( 'Asteroid' ) } className={ `tab-link pointer ${ selectedTab === 'Asteroid' ?
                    "selected" : '' }` }><span className="icon-asteroid"></span><div className="text lato">Asteroid</div></div>
                <div onClick={ () => setSelectedTab( 'Planets' ) } className={ `tab-link pointer ${ selectedTab === 'Planets' ?
                    "selected" : '' }` }><span className="icon-planet"></span><div className="text lato">Planets</div></div>
            </div>
            <hr />
            { selectedTab === 'Planets' && <Planet /> }
            { selectedTab === 'Asteroid' && <Asteroid /> }
            { selectedTab === 'Miners' && <Miners /> }

        </div>
    );
}

export default Dashboard;
