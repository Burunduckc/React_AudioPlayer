import React, {FC} from 'react'
import {useAppSelector} from "../../../redux/store";



export const TimeOfAudio: FC = () => {
    const {minutes, seconds} = useAppSelector((state) => state.player)
    return (
        <div className='main__textforend'>
            <p>{minutes < 10 ? `0${minutes}` : minutes}:</p>
            <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
        </div>
    )
}
