import React, {FC} from 'react'
//styles
import './History.css'

export const LocalHistory: FC = () => {
    const getHistoryString = window.localStorage.getItem('searchHistory');
    const arrayOfHistoryUsersLinks = getHistoryString !== null ? JSON.parse(getHistoryString) : [];
    
  return (
    <div className='history__blockoflinkusers'>
        <ul className='history__localList'>
            {arrayOfHistoryUsersLinks.map((element: string) => (
            <li className='history__localuserlink'>
                {element}
            </li>))}
        </ul>
    </div>
  )
}
