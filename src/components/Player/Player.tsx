//React
import React, {FC, useRef, useEffect, MutableRefObject} from 'react'
//UI
import { ButtonForPlay, Volume, TimeOfAudio, Music, ProgressBar } from '../imports'
//redux
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {forwardForForm} from "../../redux/slice/inputSlice";
//Styles
import './Player.css'

//Component
export const Player: FC= () => {
  const value = useAppSelector(state => state.input.userLink)
  const dispatch = useAppDispatch()

  //Refs
  const audioElement = useRef() as MutableRefObject<HTMLAudioElement>;
  const progressed = useRef<HTMLDivElement>(null)
  const progressBar = useRef<HTMLDivElement>(null)

  //variables
  const audioObj = new Audio(value);


  //Effects

  useEffect(() => {
    audioObj.addEventListener('loadstart', async() => {
      try {
        audioObj.addEventListener('error', () => {
          dispatch(forwardForForm())
        })
      } catch (error) {}
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

    return (
      <div className='main__video'>
        <div className='main__buttonBlock'>
          <div>
            {<ButtonForPlay element={audioElement}/>}
          </div>
        </div>
        <Music audioElement={audioElement}/>
        <ProgressBar
            progressBar={progressBar}
            progressed={progressed}
            audioElement={audioElement}
            />
        <div className='main__blockForEnd'>
          <Volume element = {audioElement}/>
          <TimeOfAudio/>
        </div>
      </div>
  )
}
