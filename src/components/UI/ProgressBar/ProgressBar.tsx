import React, {RefObject, MouseEvent, FC, MutableRefObject} from 'react'
//redux
import {useAppSelector} from "../../../redux/store";
//styles
import './ProgressBar.css'
interface progressIP {
    progressBar: RefObject<HTMLDivElement>,
    progressed: RefObject<HTMLDivElement>,
    audioElement: MutableRefObject<HTMLAudioElement>
}

export const ProgressBar: FC<progressIP> = ({progressBar, progressed, audioElement}) => {
    const {widthOfDuration} = useAppSelector(state => state.player)

    const rewindMusicHandler = (event: MouseEvent<HTMLDivElement>) => {
        if (audioElement.current && progressBar.current && progressed.current) {
            audioElement.current.currentTime = ((event.nativeEvent.offsetX / progressBar.current.offsetWidth) * audioElement.current.duration)
        }
    }

    return (
        <div
            className='progress_bar'
            ref={progressBar}
            onClick={rewindMusicHandler}>
            <div className='progressed' style={{width: `${widthOfDuration}%`}} ref={progressed}/>
        </div>
    )
}
