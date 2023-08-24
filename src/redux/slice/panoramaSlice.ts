import {createSlice} from "@reduxjs/toolkit";

interface panIP{
    panValue: number
}


const initialState: panIP = {
    panValue: 0
}

const panoramaSlice = createSlice({
    name: 'panorama',
    initialState,
    reducers: {
        setPanValue: (state, action) => {
            state.panValue = action.payload
        }
    }
})

export default panoramaSlice.reducer
export const {setPanValue} = panoramaSlice.actions