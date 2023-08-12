//React
import React from 'react'
//UI
import { ButtonForPlay } from '../UI/Button/Button'
//Styles
import './Player.css'
import { ProgressBar } from '../UI/ProgressBar/ProgressBar'
import { Volume } from '../UI/Volume/Volume'
import { TimeOfAudio } from '../UI/TimeOfAudio/TimeOfAudio'
import { Music } from '../UI/Music/Music'
//Types
interface proprs{
    value: string,
    err: (e: boolean) => void,
    switchShowElements: (e: boolean) => void
  }
//Component
export const Player: React.FC<proprs> = ({value, err, switchShowElements}) => {
  const [changeButton, setChangeButton] = React.useState(false)
  const [minutes, setMinutes] = React.useState(0)
  const [seconds, setSeconds] = React.useState(0)
  const [widthOfDuration, setWidtOfDuration] = React.useState(0)
  //Refs
  const audioElement = React.useRef() as React.MutableRefObject<HTMLAudioElement>; 
  const progressed = React.useRef<HTMLDivElement>(null)
  const progressBar = React.useRef<HTMLDivElement>(null)

  //Effects
  
  React.useEffect(() => {
    audioObj.addEventListener('loadstart', async() => {
      try {
        audioObj.addEventListener('loadeddata', () => {
          console.log('Заработало')
          err(false)
        })
        audioObj.addEventListener('error', () => {
          console.log('Ошибка')
          err(true)
          switchShowElements(true)
        })
      } catch (error) {
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  //Functions
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

  const rewindMusicHendler = (event: React.MouseEvent<HTMLDivElement>) => {
    if(audioElement.current && progressBar.current && progressed.current){
      audioElement.current.currentTime = ((event.nativeEvent.offsetX / progressBar.current.offsetWidth) * audioElement.current.duration)
    } 
  }

  //Volume
  const audioVolumeMusicHendler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let v: number = +event.target.value
    if (audioElement.current) {
      audioElement.current.volume = v / 100;
    }
  }

  const audioObj = new Audio(value);

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
