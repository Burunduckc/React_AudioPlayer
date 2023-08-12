import React from 'react'

interface volumeIP{
    changeVolumeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Volume: React.FC<volumeIP> = ({changeVolumeHandler}) => {
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
