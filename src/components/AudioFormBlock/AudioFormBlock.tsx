//React
import React from 'react'
//UI
import {AudioFormSwitcher} from "../AudioFormSwitcher/AudioFormSwitcher";
import {ErrorMessage} from '../imports'


export const AudioFormBlock = () => {

    return (
        <div className='main__block-input'>
            <AudioFormSwitcher/>
            <ErrorMessage/>
        </div>
    )
}