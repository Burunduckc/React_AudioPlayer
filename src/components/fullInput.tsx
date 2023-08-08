import React from 'react'

interface proprs{
    value: string
}

export const FullInput: React.FC<proprs> = ({value}) => {
  return (
    <audio controls preload='auto'>
    <source src={`${value}`} type='audio/mpeg'/>
    </audio>
  )
}
