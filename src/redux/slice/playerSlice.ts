import {createSlice} from "@reduxjs/toolkit";

interface initialIP {
    minutes: number,
    seconds: number,
    widthOfDuration: number,
    changeButton: boolean,
}

const initialState: initialIP = {
    minutes: 0,
    seconds: 0,
    widthOfDuration: 0,
    changeButton: false,
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setMinutes: (state, action) => {
            state.minutes = action.payload
        },
        setSeconds: (state, action) => {
            state.seconds = action.payload
        },
        setWidthOfDuration: (state, action) => {
            state.widthOfDuration = action.payload
        },
        setChangeButton: (state) => {
            state.changeButton = !state.changeButton
        },
    }
})

export const {setMinutes, setWidthOfDuration, setChangeButton, setSeconds} = playerSlice.actions
export default playerSlice.reducer