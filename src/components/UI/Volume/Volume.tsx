import React, {FC, ChangeEvent} from 'react'

interface volumeIP{
    changeVolumeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Volume: FC<volumeIP> = ({changeVolumeHandler}) => {
  return (
    <div className='main__range'>
       <input type="range" 
       min={0} 
       max={100} 
       onChange={changeVolumeHandler}
       id='main__background'
       />
       </div>
  )
}
