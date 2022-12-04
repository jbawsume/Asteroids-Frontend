import { useSelector } from 'react-redux';
import { planets } from '../../slices/tickerSlice';
import Popup from '../popup'
import CreateMiner from "../create-miner"
import FilterMiners from "./filterminers"

function Planet ()
{

    const planet = useSelector( planets );


    return (
        <div className="dashboard-card">
            <div className="grid-row lato h2">
                <div>Name</div>
                <div>Miners</div>
                <div>Minerals</div>
                <div></div>
            </div>

            { planet &&
                planet.map( ( item, pos ) => (
                    <div className={ `grid-row lato h3 ${ item.minerals >= 1000 ?
                        "suffient" : '' }` } >
                        <div>
                            <Popup buttonProps={
                                <>
                                    <div className="link">{ item.name } </div>  </>
                            }>
                                <FilterMiners planet={ item } />
                            </Popup>
                        </div>
                        <div>{ item.miners }</div>
                        <div className="minerals">{ item.minerals }/1000</div>
                        <div >

                            <Popup buttonProps={
                                <>
                                    <div className="add-miner"><span className="icon-add-miner"></span><span className="add-miner-btn">Create a miner</span></div>
                                </>
                            }>
                                <CreateMiner planet={ item } />
                            </Popup>
                        </div>
                    </div>
                ) ) }
        </div>
    );
}

export default Planet;
