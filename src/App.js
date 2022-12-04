import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import
{
  setTicker
} from './slices/tickerSlice';
import './App.css';
import Dashboard from "./components/dashboard";
import background from './media/background-full.png';

import io from "socket.io-client"

const socket = io.connect( "https://asteroids.dev.mediasia.cn" )

function App ()
{
  // const miners = useSelector( miners );
  const dispatch = useDispatch();

  useEffect( () =>
  {
    socket.on( "tick", ( data ) =>
    {
      dispatch( setTicker( data ) )
    } )
  }, [ socket ] )

  return (
    <div className="container">
      <header className="navbar">
        <span className="icon-logo"></span><span className="navbar-text">BACKEND MINER</span>
      </header>
      <div className="row">
        <div className="col-600">
          <Dashboard />
        </div>
        <div className="col-800">
          <div className="year-text lato">250 YEARS</div>
          <div className="img-card">
            <img src={ background } alt="Background Miner Galaxy Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
