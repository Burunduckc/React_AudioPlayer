import React from 'react'
import arrow from '../assets/icon.svg'
import './Input.css'
import { FullInput } from './fullInput'

export const Input = () => {
    const [value, setValue] = React.useState<string>('')
    const [state, setState] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [subState, setSubState] = React.useState(true)
    const inp = React.useRef() as React.MutableRefObject<HTMLInputElement>; 
    console.log(inp.current?.value)

    const onSumbitForm = async(e: React.SyntheticEvent) => {
        setValue(inp.current?.value)
        e.preventDefault()
    }

    React.useEffect(() => {
        if(value.includes('https://') || value){
            setState(true)
            setSubState(false)
        } else{
            setState(false)
            setSubState(true)
        }
    }, [value])


    const set = () => {
        setState(false)
        setSubState(true)
        setError(false)
        console.log(error)
    }

    return (
    <div className='main__blockinput'>
        {subState ? <p className='main__text'>Insert the link</p>  : <p className='main__sos' onClick={() => set()}>← Back</p>}
        { subState && 
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
        {error && <p className='main_error'>Invalid URL</p>}
        {state && <FullInput value={value} show={setSubState} err={setError} sta={setState}/>}
    </div>
  )
}