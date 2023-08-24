import {FC, MutableRefObject} from "react";
//redux
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {setPlaybackRate, showDropdownBox} from "../../../redux/slice/ControlSpeedSlice";
//styles
import './ControlSpeed.css'
//img
import menu from '../../../assets/menu.svg'

const speeds = [0.5, 1, 1.5]

interface controlIP {
    audioElement: MutableRefObject<HTMLAudioElement>
}

export const ControlSpeed: FC<controlIP> = ({audioElement}) => {
    const {dropdownBox, playbackRate} = useAppSelector(state => state.controlSpeed)
    const dispatch = useAppDispatch()

    const playbackRateHandler = (newPlayBackRate: number) => {
        dispatch(setPlaybackRate(newPlayBackRate))
        audioElement.current.playbackRate = newPlayBackRate
    }

    const changeDropdownBoxHandler = () => dispatch(showDropdownBox())
    return (
        <>
            <button
                style={{marginRight: '20px', border: 'none', cursor: 'pointer', background: 'none', fontSize: '20px', color: '#1B191C'}}
                onClick={changeDropdownBoxHandler}><img src={menu} alt={'menu'}/></button>
            <div className={'speed-block'}>
                {dropdownBox && (
                    speeds.map((speeds) => (
                        <div className={`select-speed ${playbackRate === speeds ? 'active_select' : ''}`}
                             key={speeds}
                             onClick={() => playbackRateHandler(speeds)}>
                            {speeds}
                        </div>))
                )}
            </div>
        </>
    );
};