import {FC, ChangeEvent} from "react";
import {Howl} from 'howler'
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {setPanValue} from "../../../redux/slice/panoramaSlice";

export const PanoramaAudio: FC = () => {
    const {panValue} = useAppSelector(state => state.panorama)
    const {userLink} = useAppSelector(state => state.input)
    const dispatch = useAppDispatch()

    const musicHowler = new Howl({
        src: [userLink]
    })
    const panChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const newPanValue = parseFloat(event.target.value)
        dispatch(setPanValue(newPanValue))

        const leftVolume = Math.max(0, 1 - newPanValue)
        const rightVolume = Math.max(0, 1 + newPanValue)

        musicHowler.volume(leftVolume, rightVolume)
    }

    return (
        <>
            <input
                type={"range"}
                min={-1}
                max={1}
                step={0.01}
                value={panValue}
                onChange={panChangeHandler}
            />
        </>
    );
};