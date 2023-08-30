import React, {FC, SyntheticEvent, ChangeEvent} from 'react'
//redux
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {forwardForForm, getFormState, setUserLink, setViewAudio} from "../../../redux/slice/inputSlice";
import {setShowHistory, showHistoryHandler} from "../../../redux/slice/historySlice";
//utils
import {saveSearchHistory} from "../../../utils/formHandlres/localHistoryFnc/localHistory";
//img
import arrow from '../../../assets/icon.svg'
//styles
import './Form.css'

export const Form: FC = () => {
    const {userLink} = useAppSelector(getFormState)
    const dispatch = useAppDispatch()

    const submitFormHandler = (event: SyntheticEvent) => {
        event.preventDefault()
        if (userLink.trim().length && userLink.indexOf('https://') === 0) {
            dispatch(setViewAudio(false))
            saveSearchHistory(userLink)
        } else {
            dispatch(forwardForForm())
        }
    }

    const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setUserLink(event.target.value))
        dispatch(showHistoryHandler())
    }
    const showUserHistory = () => dispatch(setShowHistory())

    return (
        <form
            action="src/components/UI/Form"
            className='main__form'
            onSubmit={submitFormHandler}
        >
            <input
                type="text"
                value={userLink}
                onChange={changeInputValue}
                onClick={showUserHistory}
                placeholder='https://'
                className='main__form-input'
            />
            <button type='submit' className='main__form-button'>
                <img src={arrow} alt="arrow"/>
            </button>
        </form>
    )
}
