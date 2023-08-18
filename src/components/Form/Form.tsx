import React, {FC, SyntheticEvent, ChangeEvent} from 'react'
//redux
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {setUserLink} from "../../redux/slice/inputSlice";
//img
import arrow from '../../assets/icon.svg'


interface formIP { 
    submitFormHandler: (event: SyntheticEvent) => void
}

export const Form: FC<formIP> = ({submitFormHandler}) => {
    const {userLink} = useAppSelector(state => state.input)
    const dispatch = useAppDispatch()

    const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => dispatch(setUserLink(event.target.value))


    return (
        <form
            action=""
            className='main__form'
            onSubmit={submitFormHandler}
        >
            <input
                type="text"
                value={userLink}
                onChange={changeInputValue}
                placeholder='https://'
                className='main__input'
            />
            <button type='submit' className='main__button'>
                <img src={arrow} alt="arrow"/>
            </button>
        </form>
    )
}
