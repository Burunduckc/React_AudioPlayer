import React from 'react'

interface proprs{
    value: string,
    show: any,
    err: any,
    sta: any
  }

export const FullInput: React.FC<proprs> = ({value, err, show, sta}) => {
  const audioObj = new Audio(value);
  audioObj.addEventListener('loadstart', async() => {
    try {
      audioObj.addEventListener('loadeddata', () => {
        console.log('GOOOD')
        err(false)
      })
      audioObj.addEventListener('error', () => {
        console.log('лох')
        sta(false)
        show(true)
        err(true)
      })
    } catch (error) {
    }
  })
  return (
    <audio controls preload='auto'>
    <source src={`${value}`} type='audio/mpeg'/>
    </audio>
  )
}
