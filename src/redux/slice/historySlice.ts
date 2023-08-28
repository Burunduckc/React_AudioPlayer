import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface historyIP{
    showHistory: boolean
}

const initialState: historyIP = {
    showHistory: false
}

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        setShowHistory: (state) => {
            state.showHistory = !state.showHistory
        },
        showHistoryHandler: (state) => {
            state.showHistory = false
        }

    }
})

export const getShowHistory = (state: RootState) => state.history
export const {setShowHistory, showHistoryHandler} = historySlice.actions
export default historySlice.reducer