import { configureStore } from '@reduxjs/toolkit'

import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";
import input from './slice/inputSlice'
import player from './slice/playerSlice'
export const store = configureStore({
    reducer: {
        input,
        player
    },
})


export type RootState = ReturnType<typeof store.getState>


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()