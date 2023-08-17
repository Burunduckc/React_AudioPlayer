//React
import React, {FC, useState, useRef, useEffect, MutableRefObject, MouseEvent, ChangeEvent} from 'react'
//UI
import { ButtonForPlay, Volume, TimeOfAudio, Music, ProgressBar } from '../imports'
//Styles
import './Player.css'
//Types
interface proprs{
    value: string,
    changeErrorMessage: (e: boolean) => void,
    switchShowElements: (e: boolean) => void
  }
//Component
export const Player: FC<proprs> = ({value, changeErrorMessage, switchShowElements}) => {
  
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [widthOfDuration, setWidtOfDuration] = useState(0)
  const [changeButton, setChangeButton] = useState(false)


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
          changeErrorMessage(true)
          switchShowElements(true)
        })
      } catch (error) {}
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  //Functions For player

  //change time
  const duration = () => {
    const currTime = Math.floor(audioElement.current.currentTime)
    const minute = Math.floor(currTime / 60)
    const second = currTime % 60
    const width = Math.floor(currTime * 100 / audioElement.current.duration)
    setMinutes(minute)
    setSeconds(second)
    setWidtOfDuration(width)
  }
  //Starts
  const playMusicHendler = () => {
    if (audioElement.current) {
      audioElement.current.ontimeupdate = duration
      audioElement.current.play();
      setChangeButton(!changeButton)
    }
  }

  const pauseMusicHendler = () => {
    if (audioElement.current) {
      audioElement.current.pause();
      setChangeButton(!changeButton)
    }
  }

  const rewindMusicHendler = (event: MouseEvent<HTMLDivElement>) => {
    if(audioElement.current && progressBar.current && progressed.current){
      audioElement.current.currentTime = ((event.nativeEvent.offsetX / progressBar.current.offsetWidth) * audioElement.current.duration)
    } 
  }

  //Volume
  const audioVolumeMusicHendler = (event: ChangeEvent<HTMLInputElement>) => {
    let v: number = +event.target.value
    if (audioElement.current) {
      audioElement.current.volume = v / 100;
    }
  }


  return (
    <div  className='main__video'>
      <div className='main__buttonBlock'>
        <div>
          {<ButtonForPlay onclick={changeButton ? pauseMusicHendler : playMusicHendler} typeOfButton={changeButton}/>}
          </div>
      </div>
    <Music audioElement={audioElement} value={value}/>
    <ProgressBar progressBar={progressBar} progressed={progressed} onclick={rewindMusicHendler} widthOfDuration={widthOfDuration}/>
   <div className='main__blockForEnd'>
      <Volume changeVolumeHandler={audioVolumeMusicHendler}/>
      <TimeOfAudio minutes={minutes} seconds={seconds}/>
    </div>
    </div>
  )
}
