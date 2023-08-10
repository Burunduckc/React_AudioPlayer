import React from 'react'
import arrow from '../assets/icon.svg'
import close from '../assets/close.svg'
import warning from '../assets/warning.svg'
import './Input.css'
import { FullInput } from './fullInput'


export const Input = () => {
    const [value, setValue] = React.useState<string>('')
    const [showAudio, setShowAudio] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [changeForm, setChangeForm] = React.useState(true)
    const inp = React.useRef() as React.MutableRefObject<HTMLInputElement>; 


    const onSumbitForm = async(e: React.SyntheticEvent) => {
        setValue(inp.current?.value)
        e.preventDefault()
       console.log(localStorage.getItem('searchHistory')) 
    }

    React.useEffect(() => {
        if((value.indexOf('https://') && value.length > 1) || value.length > 1){
            setShowAudio(true)
            setChangeForm(false)
        } else{
            setShowAudio(false)
            setChangeForm(true)
        }
    }, [value])


    const clear = () => {
        setShowAudio(false)
        setChangeForm(true)
        setError(false)
        setValue('')
        console.log(error)
    }

    const clearError = () => {
        setError(false)
    }

    return (
    <div className='main__blockinput'>
        {changeForm ? <p className='main__text'>Insert the link</p>  : <p className='main__sos' onClick={() => clear()}>← Back</p>}
        { changeForm && 
                <form 
                action=""
                className='main__form'
                onSubmit={(e) => onSumbitForm(e)}>
                <input type="text" 
                ref={inp}
                placeholder='https://'
                className='main__input'
                />
                <button type='submit' className='main__button'>
                    <img src={arrow} alt="arrow" />
                </button>
                </form>
        }
        {error && <div className='main__blockError'>
            <div className='main__blockErrorTop'>
                <div className='main__yellowBlock'>
                    <img src={warning} alt='warning'/>
                </div>
                <div className='main__textBlock'>
                    <p>Warning</p>
                    <p>Invalid URL</p>
                </div>
            </div>
            <div className='main__close' onClick={() => clearError()}>
                    <img src={close} alt="btnForHide" />
            </div>
        </div>}
        {showAudio && <FullInput value={value} showForm={setChangeForm} err={setError} showAudio={setShowAudio}/>}
    </div>
  )
}