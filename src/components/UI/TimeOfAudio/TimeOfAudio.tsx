import React, {FC} from 'react'

interface timeAudioIP{
    minutes: number,
    seconds: number
}

export const TimeOfAudio: FC<timeAudioIP> = ({minutes, seconds}) => {
  return (
    <div className='main__textforend'>
    <p>{minutes < 10 ? `0${minutes}` : minutes}:</p>
    <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
  </div>
  )
}
