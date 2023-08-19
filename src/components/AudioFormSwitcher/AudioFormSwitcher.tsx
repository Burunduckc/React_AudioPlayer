import React from "react";
//Ui
import {Form, LocalHistory, Player} from "../imports";
import {getFormState} from "../../redux/slice/inputSlice";
import {ForwardText} from "../UI/ForwardText/ForwardText";
//Redux
import {useAppSelector} from "../../redux/store";

export const AudioFormSwitcher = () => {
    const {viewAudio} = useAppSelector(getFormState)


    return (
        <>
            {
                viewAudio
                    ? (
                        <>
                            <p className='main__text'>Insert the link</p>
                            <Form/>
                            <LocalHistory/>
                        </>
                    )
                    :
                    (
                        <>
                            <ForwardText/>
                            <Player/>
                        </>
                    )
            }
        </>
    );
};