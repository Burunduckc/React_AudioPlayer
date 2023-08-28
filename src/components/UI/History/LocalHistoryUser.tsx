import React, {FC} from 'react'
//styles
import './History.css'
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {setUserLink} from "../../../redux/slice/inputSlice";
import {getShowHistory} from "../../../redux/slice/historySlice";

export const LocalHistory: FC = () => {
    const getHistoryString = window.localStorage.getItem('searchHistory');
    const arrayOfHistoryUsersLinks = getHistoryString !== null ? JSON.parse(getHistoryString) : [];
    const dispatch = useAppDispatch()
    const {showHistory} = useAppSelector(getShowHistory)
    const selectUserLink = (link: string) => dispatch(setUserLink(link))

    return (
        <div className='history__blockoflinkusers'>
            <ul className='history__localList'>
                {showHistory && arrayOfHistoryUsersLinks.map((element: string, index: number) => (
                            <li
                                key={index}
                                className='history__local_user-link'
                                onClick={() => selectUserLink(element)}>
                                {element}
                            </li>))
                 }
            </ul>
        </div>
    )
}
