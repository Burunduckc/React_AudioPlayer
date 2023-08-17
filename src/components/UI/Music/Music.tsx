import React, {FC, MutableRefObject} from 'react'

interface musicIP{
    audioElement: MutableRefObject<HTMLAudioElement>,
    value: string
}

export const Music: FC<musicIP> = ({audioElement, value}) => {
  return (  
    <audio ref={audioElement} preload='auto' id='audio-player'>
    <source src={`${value}`} type='audio/mpeg'/>
    </audio>
  )
}
