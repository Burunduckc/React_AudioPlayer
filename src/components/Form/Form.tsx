import React, {FC, SyntheticEvent, ChangeEvent} from 'react'

//img
import arrow from '../../assets/icon.svg'


interface formIP { 
    submitFormHandler: (event: SyntheticEvent) => void,
    userLink: string,
    changeUserLink: (event: ChangeEvent<HTMLInputElement>) => void,
}

export const Form: FC<formIP> = ({submitFormHandler, userLink, changeUserLink}) => {
  return (
                    <form 
                    action=""
                    className='main__form'
                    onSubmit={submitFormHandler}
                    >
                        <input 
                        type="text" 
                        value={userLink}
                        onChange={changeUserLink}
                        placeholder='https://'
                        className='main__input'
                        />
                            <button type='submit' className='main__button'>
                                <img src={arrow} alt="arrow" />
                            </button>
                    </form>             
  )
}
