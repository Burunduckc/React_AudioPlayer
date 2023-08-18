import React, {FC, ChangeEvent, MutableRefObject} from 'react'

interface volumeIP{
    element: MutableRefObject<HTMLAudioElement>
}

export const Volume: FC<volumeIP> = ({element}) => {

    const audioVolumeMusicHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let v: number = +event.target.value
        if (element.current) {
            element.current.volume = v / 100;
        }
    }

    return (
        <div className='main__range'>
            <input type="range"
                   min={0}
                   max={100}
                   onChange={audioVolumeMusicHandler}
                   id='main__background'
            />
        </div>
    )
}
