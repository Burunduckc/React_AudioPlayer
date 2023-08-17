//React
import React, {ChangeEvent, useState, SyntheticEvent} from 'react'
//UI
import { ErrorMessage, Form, Player, LocalHistory } from '../imports'
//styles
import './Input.css'

export const Input = () => {
    const [userLink, setUserLink] = useState<string>('')
    const [viewAudio, setViewAudio] = useState<boolean>(true)
    const [errorMessage, setErrorMessage] = useState(false)


    const sumbitFormHendler = (event: SyntheticEvent) => {
        
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

    const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => setUserLink(event.target.value)

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
        {errorMessage && <ErrorMessage onclick={clearErrorMessage}/>}
    </div>
  )
}