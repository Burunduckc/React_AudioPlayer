//React
import React, {SyntheticEvent} from 'react'
//UI
import { ErrorMessage, Form, Player, LocalHistory } from '../imports'
//redux
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {forwardForForm, setToForm, setViewAudio} from "../../redux/slice/inputSlice";
//styles
import './Input.css'

export const Input = () => {
    const {errorMessage, userLink, viewAudio} = useAppSelector((state) => state.input)
    const dispatch = useAppDispatch()

    const submitFormHandler = (event: SyntheticEvent) => {
        event.preventDefault()
        if(userLink.trim().length && userLink.indexOf('https://') === 0){
            dispatch(setViewAudio(false))
            saveSearchHistory(userLink)
        } else {
                dispatch(forwardForForm())
        }
    }

    const saveSearchHistory = (search: string) => {
        const searchHistoryString = localStorage.getItem('searchHistory');
        let searchHistory = searchHistoryString !== null ? JSON.parse(searchHistoryString) : [];
        searchHistory.unshift(search);

        if (searchHistory.length > 4) {
            searchHistory = searchHistory.slice(0, 4);
        }

        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    };


    const returnToForm = () => {
        dispatch(setToForm())
    }



    return (
        <div className='main__blockinput'>
            {
                viewAudio
                    ? (
                        <>
                            <p className='main__text'>Insert the link</p>
                            <Form
                                submitFormHandler={submitFormHandler}
                            />
                            <LocalHistory/>
                        </>
                    )
                    :
                    (
                        <>
                            <p className='main__sos' onClick={returnToForm}>← Back</p>
                            <Player/>
                        </>
                    )
            }
            {errorMessage && <ErrorMessage/>}
        </div>
  )
}