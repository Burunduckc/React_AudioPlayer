import React, {FC, MutableRefObject} from 'react'
import {useAppSelector} from "../../../redux/store";

interface musicIP{
    audioElement: MutableRefObject<HTMLAudioElement>,
}

export const Music: FC<musicIP> = ({audioElement}) => {
    const {userLink} = useAppSelector(state => state.input)
    return (
        <audio ref={audioElement} preload='auto' id='audio-player'>
            <source src={`${userLink}`} type='audio/mpeg'/>
        </audio>
    )
}
