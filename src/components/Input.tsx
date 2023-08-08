import React from 'react'
import arrow from '../assets/icon.svg'
import './Input.css'
import axios from 'axios'
import { FullInput } from './fullInput'

export const Input = () => {
    const [value, setValue] = React.useState<string>('')
    const [state, setState] = React.useState(false)
    const [subState, setSubState] = React.useState(true)
    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const inp = React.useRef() as React.MutableRefObject<HTMLInputElement>; 
    console.log(inp.current?.value)

    const onSumbitForm = async(e: React.SyntheticEvent) => {
        setValue(inp.current?.value)
        e.preventDefault()
        try {
            const {data} = await axios.get(`${value}`)
            return data
        } catch (error) {
            alert('Ошибка!')
        }
    }

    React.useEffect(() => {
        if(value.length > 3 && value.includes('https://')){
        setState(true)
        setSubState(false)
        } else{
            setState(false)
            setSubState(true)
        }
    }, [value])


    const set = () => {
        setValue('')
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
        {inp.current?.value.includes('https://') ? <p></p>:<p className='main__error'>Error message here</p>}
        {state && <FullInput value={value}/>}
    </div>
  )
}
