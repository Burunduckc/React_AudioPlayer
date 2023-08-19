import React, {FC} from 'react'
//redux
import {getFormState, setClearError} from "../../../redux/slice/inputSlice";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
//Img
import close from '../../../assets/close.svg'
import warning from '../../../assets/warning.svg'

export const ErrorMessage: FC = () => {
    const {errorMessage} = useAppSelector(getFormState)
    const dispatch = useAppDispatch()
    const clearErrorMessage = () => dispatch(setClearError(false))

    return (
        <>
            {errorMessage && (
                <div className='main__blockError'>
                    <div className='main__blockErrorTop'>
                        <div className='main__yellowBlock'>
                            <img src={warning} alt='warning'/>
                        </div>
                        <div className='main__textBlock'>
                            <p>Warning</p>
                            <p>Invalid URL</p>
                        </div>
                    </div>
                    <div className='main__close' onClick={clearErrorMessage}>
                        <img src={close} alt="btnForHide"/>
                    </div>
                </div>
            )}
        </>
    )
}
