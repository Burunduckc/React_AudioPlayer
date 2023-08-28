import { configureStore } from '@reduxjs/toolkit'

import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";
import input from './slice/inputSlice'
import player from './slice/playerSlice'
import panorama from './slice/panoramaSlice'
import controlSpeed from './slice/ControlSpeedSlice'
import history from './slice/historySlice'
export const store = configureStore({
    reducer: {
        input,
        player,
        panorama,
        controlSpeed,
        history
    },
})


export type RootState = ReturnType<typeof store.getState>


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()