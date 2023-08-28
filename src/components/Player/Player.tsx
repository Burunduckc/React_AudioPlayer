//React
import React, {FC, useRef, useEffect, MutableRefObject} from 'react'
//UI
import {ButtonForPlay, Volume, TimeOfAudio, Music, ProgressBar} from '../imports'
import {ControlSpeed} from "../UI/ControlSpeed/ControlSpeed";
//redux
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {forwardForForm} from "../../redux/slice/inputSlice";
//Styles
import './Player.css'

//Component
export const Player: FC = () => {
    const value = useAppSelector(state => state.input.userLink)
    const {seconds, minutes} = useAppSelector(state => state.player)
    const dispatch = useAppDispatch()
    //Refs
    const audioElement = useRef() as MutableRefObject<HTMLAudioElement>;
    const progressed = useRef<HTMLDivElement>(null)
    const progressBar = useRef<HTMLDivElement>(null)

    //variables
    const audioObj = new Audio(value);
    //Effects

    useEffect(() => {
        audioObj.addEventListener('loadstart', async () => {
            try {
                audioObj.addEventListener('error', () => {
                    dispatch(forwardForForm())
                })
            } catch (error) {
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    useEffect(() => {

        const arrowLeftHandle = () => audioElement.current.currentTime -= 5
        const arrowRightHandle = () => audioElement.current.currentTime += 5

        const keyShortCats: { [key: string]: () => void } = {
            ArrowLeft: arrowLeftHandle,
            ArrowRight: arrowRightHandle
        }

        const keyDownHandle = (event: KeyboardEvent) => {
            const action = keyShortCats[event.key]
            if (action) {
                action()
            }
        }
        // switch (event.key) {
        //     case 'ArrowLeft':
        //         audioElement.current.currentTime -= 5
        //         break;
        //     case 'ArrowRight':
        //         audioElement.current.currentTime += 5
        //         break;
        //     default:
        //         break;
        // }

        window.addEventListener('keydown', keyDownHandle)
        return () => window.removeEventListener('keydown', keyDownHandle)
    }, [seconds, minutes])

    //Component
    return (
        <div style={{maxWidth: '610px'}}>
            <Music audioElement={audioElement}/>
            <div className='player__video'>
                <div className='player__buttons-block'>
                    <div>
                        {<ButtonForPlay element={audioElement}/>}
                    </div>
                    <div>
                        <ControlSpeed audioElement={audioElement}/>
                    </div>
                </div>
                <ProgressBar
                    progressBar={progressBar}
                    progressed={progressed}
                    audioElement={audioElement}
                />
                <div className='player__end-block'>
                    <Volume element={audioElement}/>
                    <TimeOfAudio/>
                </div>
            </div>
        </div>

    )
}
