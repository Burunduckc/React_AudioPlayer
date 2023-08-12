import React from 'react'

interface musicIP{
    audioElement: React.MutableRefObject<HTMLAudioElement>,
    value: string
}

export const Music: React.FC<musicIP> = ({audioElement, value}) => {
  return (
    <audio ref={audioElement} preload='auto' id='audio-player'>
    <source src={`${value}`} type='audio/mpeg'/>
    </audio>
  )
}
