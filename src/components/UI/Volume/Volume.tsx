import React, {FC, ChangeEvent, MutableRefObject, useRef} from 'react'
//styles
import './Volume.css'

interface volumeIP {
    element: MutableRefObject<HTMLAudioElement>
}

export const Volume: FC<volumeIP> = ({element}) => {
    const rangeReference = useRef() as MutableRefObject<HTMLInputElement>
    const lineRef = useRef() as MutableRefObject<HTMLDivElement>


    const audioVolumeMusicHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let v: number = +event.target.value
        if (element.current) {
            element.current.volume = v / 100;
        }
        const sliderValue = (+rangeReference.current.value - +rangeReference.current.min) / (+rangeReference.current.max - +rangeReference.current.min)
        lineRef.current.style.width = sliderValue * 100 + '%'
    }

    return (
        <div className='volume__container'>
            <input type="range"
                   min={0}
                   max={100}
                   onChange={audioVolumeMusicHandler}
                   id='volume__background'
                   ref={rangeReference}
            />
            <div
                className={'volume__line'}
                ref={lineRef}
            ></div>
        </div>
    )
}
