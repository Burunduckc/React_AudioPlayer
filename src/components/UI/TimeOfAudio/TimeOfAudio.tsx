import React from 'react'

interface timeAudioIP{
    minutes: number,
    seconds: number
}

export const TimeOfAudio: React.FC<timeAudioIP> = ({minutes, seconds}) => {
  return (
    <div className='main__textforend'>
    <p>{minutes < 10 ? `0${minutes}` : minutes}:</p>
    <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
  </div>
  )
}
