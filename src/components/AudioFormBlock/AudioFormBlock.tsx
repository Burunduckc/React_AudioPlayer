//React
import React from 'react'
//UI
import {AudioFormSwitcher} from "../AudioFormSwitcher/AudioFormSwitcher";
import {ErrorMessage} from '../imports'
//styles
import './AudioFormBlock.css'

export const AudioFormBlock = () => {

    return (
        <div className='main__blockinput'>
            <AudioFormSwitcher/>
            <ErrorMessage/>
        </div>
    )
}