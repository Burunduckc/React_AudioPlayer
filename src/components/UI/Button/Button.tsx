import React from 'react'

import btnBegin  from '../../../assets/Play.svg'
import btnStop from '../../../assets/Pause.svg'


interface BtnIP{
    onclick: () => void,
    typeOfButton: boolean
}


export const ButtonForPlay: React.FC<BtnIP> = ({onclick, typeOfButton}) => {
    return (
        <button 
        onClick={() => onclick()}
        className={`player__${typeOfButton ? 'btnStop' : 'btnBegin'}`}
        >
            <img src={typeOfButton ? btnStop : btnBegin} alt='ButtonForControlMusic'/>
        </button>
    )
}