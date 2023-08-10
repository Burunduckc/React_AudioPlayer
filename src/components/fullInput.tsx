import React from 'react'
import './fullInput.css'
import btnBegin  from '../assets/Play.svg'
import btnStop from '../assets/Pause.svg'
interface proprs{
    value: string,
    showForm: (e: boolean) => void,
    err: (e: boolean) => void,
    showAudio: (e: boolean) => void,
  }

export const FullInput: React.FC<proprs> = ({value, err, showForm, showAudio}) => {
  const [changeButton, setChangeButton] = React.useState(false)
  const [minutes, setMinutes] = React.useState(0)
  const [seconds, setSeconds] = React.useState(0)
  const [widthOfDuration, setWidtOfDuration] = React.useState(0)
  //Refs
  const audioElement = React.useRef() as React.MutableRefObject<HTMLAudioElement>; 
  const progressed = React.useRef<HTMLDivElement>(null)
  const progressBar = React.useRef<HTMLDivElement>(null)

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
    console.log(widthOfDuration)
  }
  //Starts
  const play = () => {
    if (audioElement.current) {
      audioElement.current.ontimeupdate = duration
      audioElement.current.play();
      setChangeButton(!changeButton)
    }
  }

  const pause = () => {
    if (audioElement.current) {
      audioElement.current.pause();
      setChangeButton(!changeButton)
    }
  }
  //Speed
  // const speddUp = () => {

  // }

  // const speedDown = () => {

  // }

  // const speedNormal = () => {

  // }

  const rewind = (e: React.MouseEvent<HTMLDivElement>) => {
    if(audioElement.current && progressBar.current && progressed.current){
      audioElement.current.currentTime = ((e.nativeEvent.offsetX / progressBar.current.offsetWidth) * audioElement.current.duration)
    } 
  }

  //Volume
  const audioVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v: number = +e.target.value
    if (audioElement.current) {
      audioElement.current.volume = v / 100;
    }
    console.log(e)
  }

  console.log(`Минуты: ${minutes}, Секунды: ${seconds}`)
  console.log(changeButton)
  const audioObj = new Audio(value);
  React.useEffect(() => {
    audioObj.addEventListener('loadstart', async() => {
      try {
        audioObj.addEventListener('loadeddata', () => {
          console.log('Заработало')
          err(false)
        })
        audioObj.addEventListener('error', () => {
          console.log('Ошибка')
          showAudio(false)
          showForm(true)
          err(true)
        })
      } catch (error) {
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  const firstBtn = <div onClick={() => play()} className='player__btnBegin'><img src={btnBegin} alt='btnForPlay'></img></div>
  const secondBtn = <div onClick={() => pause()} className='player__btnStop'><img src={btnStop} alt='btnForStop'/></div>
  return (
    <div  className='main__video'>
      <div className='main__buttonBlock'>
        <div>
          {changeButton ? secondBtn : firstBtn}
          </div>
          {/* <div className='main__audioMore'>
              <div className='main__audioText'>...</div>
              <div className='main_audioList'>
                <ul className='main_audioUl'>
                  <li className='main_audioLi'>0.5</li>
                  <li className='main_audioLi'>1</li>
                  <li className='main_audioLi'>1.5</li>
                </ul>
              </div>
          </div> */}
      </div>
    <audio ref={audioElement} preload='auto' id='audio-player'>
    <source src={`${value}`} type='audio/mpeg'/>
    </audio>
    <div className='progress_bar' ref={progressBar} onClick={(e) => rewind(e)}>
      <div className='progressed' style={{width: `${widthOfDuration}%`}} ref={progressed}>
      </div>
    </div>
   <div className='main__blockForEnd'>
     <div className='main__range'>
       <input type="range" 
       min={0} 
       max={100} 
       onChange={(e) => audioVolume(e)}
       id='main__background'
       />
       </div>
    
      <div className='main__textforend'>
        <p>{minutes < 10 ? `0${minutes}` : minutes}:</p>
        <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
      </div>
    </div>
    </div>

  )
}
