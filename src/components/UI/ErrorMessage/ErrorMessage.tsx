import React from 'react'

interface errorPropsIP{
    warningSrc : string,
    closeSrc : string,
    onclick: () => void
}


export const ErrorMessage: React.FC<errorPropsIP> = ({warningSrc, closeSrc, onclick}) => {
  return (
    <div className='main__blockError'>
            <div className='main__blockErrorTop'>
                <div className='main__yellowBlock'>
                    <img src={warningSrc} alt='warning'/>
                </div>
                <div className='main__textBlock'>
                    <p>Warning</p>
                    <p>Invalid URL</p>
                </div>
            </div>
            <div className='main__close' onClick={() => onclick()}>
                    <img src={closeSrc} alt="btnForHide" />
            </div>
        </div>
  )
}
