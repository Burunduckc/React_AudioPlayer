import React from "react";
//Ui
import {Form, LocalHistory, Player} from "../imports";
import {getFormState} from "../../redux/slice/inputSlice";
import {ForwardText} from "../UI/ForwardText/ForwardText";
import {TextOfLink} from "../UI/TextOfLink/TextOfLink";
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
                            <TextOfLink/>
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