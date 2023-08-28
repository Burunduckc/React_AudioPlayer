import React, {FC} from 'react'
//redux
import {useAppSelector} from "../../../redux/store";
//styles
import './TimeOfAudio.css'


export const TimeOfAudio: FC = () => {
    const {minutes, seconds} = useAppSelector((state) => state.player)
    return (
        <div className='player__text-time'>
            <p>{minutes < 10 ? `0${minutes}` : minutes}:</p>
            <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
        </div>
    )
}
