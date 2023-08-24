import React, {FC, MutableRefObject} from 'react'
//redux
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {setChangeButton, setMinutes, setSeconds, setWidthOfDuration} from "../../../redux/slice/playerSlice";
//UI
import {ControlSpeed} from "../ControlSpeed/ControlSpeed";
//Img
import btnBegin from '../../../assets/Play.svg'
import btnStop from '../../../assets/Pause.svg'


interface BtnIP {
    element: MutableRefObject<HTMLAudioElement>
}


export const ButtonForPlay: FC<BtnIP> = ({element}) => {
    const dispatch = useAppDispatch()

    const duration = () => {
        const currTime = Math.floor(element.current.currentTime)
        const minute = Math.floor(currTime / 60)
        const second = currTime % 60
        const width = Math.floor(currTime * 100 / element.current.duration)
        dispatch(setMinutes(minute))
        dispatch(setSeconds(second))
        dispatch(setWidthOfDuration(width))
    }
    //Starts
    const playMusicHandler = () => {
        if (element.current) {
            element.current.ontimeupdate = duration
            element.current.play();
            dispatch(setChangeButton())
        }
    }

    const pauseMusicHandler = () => {
        if (element.current) {
            element.current.pause();
            dispatch(setChangeButton())
        }
    }

    const {changeButton} = useAppSelector(state => state.player)

    return (
        <>
                <button
                    onClick={changeButton ? pauseMusicHandler : playMusicHandler}
                    className={`player__${changeButton ? 'btnStop' : 'btnBegin'}`}
                >
                    <img src={changeButton ? btnStop : btnBegin} alt='ButtonForControlMusic'/>
                </button>
        </>
    )
}