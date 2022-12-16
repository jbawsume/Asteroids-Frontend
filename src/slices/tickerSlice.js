import { createSlice } from "@reduxjs/toolkit";

export const tickerSlice = createSlice( {
    name: "ticker",
    initialState: {
        miners: [],
        planets: [],
        asteroids: [],
        currentTick: 0,
    },
    reducers: {
        showNotification: ( state, action ) =>
        {
            state.count++;
            state.message = action.payload.message;
        },
        setTicker: ( state, action ) =>
        {
            state.miners = action.payload.miners;
            state.planets = action.payload.planets;
            state.asteroids = action.payload.asteroids;
            state.currentTick = action.payload.currentTick;
        },
    },
} );

export const { setTicker } = tickerSlice.actions;
export const miners = ( state ) => state.ticker.miners;
export const planets = ( state ) => state.ticker.planets;
export const asteroids = ( state ) => state.ticker.asteroids;
export const currentTick = ( state ) => state.ticker.currentTick;
export default tickerSlice.reducer;

