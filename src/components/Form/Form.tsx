import React from 'react'

interface formIP { 
    submitFormHandler: (event: React.SyntheticEvent) => void,
    userLink: string,
    changeUserLink: (event: React.ChangeEvent<HTMLInputElement>) => void,
    arrowSrc: string
}

export const Form: React.FC<formIP> = ({submitFormHandler, userLink, changeUserLink, arrowSrc}) => {
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
                                <img src={arrowSrc} alt="arrow" />
                            </button>
                    </form>             
  )
}
