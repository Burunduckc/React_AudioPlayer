import React, {FC} from 'react'
//redux
import {getFormState, setClearError} from "../../../redux/slice/inputSlice";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
//Img
import close from '../../../assets/close.svg'
import warning from '../../../assets/warning.svg'
//styles
import './ErrorMessage.css'

export const ErrorMessage: FC = () => {
    const {errorMessage} = useAppSelector(getFormState)
    const dispatch = useAppDispatch()
    const clearErrorMessage = () => dispatch(setClearError(false))

    return (
        <>
            {errorMessage && (
                <div className='main__block-error'>
                    <div className='main__block-error-top'>
                        <div className='main__yellow-block'>
                            <img src={warning} alt='warning'/>
                        </div>
                        <div className='main__text-error'>
                            <p>Warning</p>
                            <p>Invalid URL</p>
                        </div>
                    </div>
                    <div className='main__close-error' onClick={clearErrorMessage}>
                        <img src={close} alt="btnForHide" title={'Close'}/>
                    </div>
                </div>
            )}
        </>
    )
}
