import React from 'react'

import { ErrorMessage } from '../UI/ErrorMessage/ErrorMessage'
import { Form } from '../Form/Form'
import { Player } from '../Player/Player'

import arrow from '../../assets/icon.svg'
import close from '../../assets/close.svg'
import warning from '../../assets/warning.svg'
import './Input.css'
import { LocalHistory } from '../UI/History/LocalHistoryUser'

export const Input = () => {
    const [userLink, setUserLink] = React.useState<string>('')
    const [viewAudio, setViewAudio] = React.useState<boolean>(true)
    const [errorMessage, setErrorMessage] = React.useState(false)


    const sumbitFormHendler = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if(userLink.trim().length && userLink.indexOf('https://') === 0){
        setViewAudio(false)
        saveSearchHistory(userLink)
        } else {
        setViewAudio(true)
        setErrorMessage(true)
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
        setViewAudio(true)
        setErrorMessage(false)
        setUserLink('')
    }

    const clearErrorMessage = () => setErrorMessage(false)

    const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => setUserLink(event.target.value)

    return (
    <div className='main__blockinput'>
        {
            viewAudio 
            ? (
            <>
                <p className='main__text'>Insert the link</p>  
                    <Form 
                    submitFormHandler={sumbitFormHendler}
                    userLink={userLink}
                    changeUserLink={changeInputValue}
                    arrowSrc={arrow}
                    />
                    <LocalHistory/>
            </> 
            )
            : 
            ( 
                <>
                    <p className='main__sos' onClick={() => returnToForm()}>← Back</p>
                    <Player 
                    value={userLink} 
                    changeErrorMessage={setErrorMessage} 
                    switchShowElements = {setViewAudio}
                    />
                </>       
                  )
        } 
        {errorMessage && <ErrorMessage warningSrc={warning} closeSrc={close} onclick={clearErrorMessage}/>}
    </div>
  )
}