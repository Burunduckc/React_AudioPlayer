import React, {FC} from 'react'

//Img
import close from '../../../assets/close.svg'
import warning from '../../../assets/warning.svg'


interface errorPropsIP{
    onclick: () => void
}


export const ErrorMessage: FC<errorPropsIP> = ({onclick}) => {
  return (
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
            <div className='main__close' onClick={() => onclick()}>
                    <img src={close} alt="btnForHide" />
            </div>
        </div>
  )
}
