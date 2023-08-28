//React
import {FC} from "react";
//redux
import {setToForm} from "../../../redux/slice/inputSlice";
import {useAppDispatch} from "../../../redux/store";
//styles
import './ForwardText.css'

export const ForwardText: FC = () => {
    const dispatch = useAppDispatch()

    const returnToForm = () => dispatch(setToForm())


    return (
        <p className='main__sos' onClick={returnToForm}>← Back</p>
    );
};