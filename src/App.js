import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import
{
  setTicker, currentTick
} from './slices/tickerSlice';
import './App.css';
import Dashboard from "./components/dashboard";
import Background from "./components/background";

import io from "socket.io-client"

const socket = io.connect( "https://asteroids.dev.mediasia.cn" )

function App ()
{
  const currentYear = useSelector( currentTick );
  const dispatch = useDispatch();


  useEffect( () =>
  {
    socket.on( "tick", ( data ) =>
    {
      dispatch( setTicker( data ) )
    } )
    return () =>
    {
      socket.off( 'tick' );
    };
  }, [ dispatch ] )

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
          <div className="year-text lato">{ currentYear } YEARS</div>
          <div className="img-card">
            <Background />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
