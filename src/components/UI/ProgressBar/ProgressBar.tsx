import React from 'react'

interface progressIP{
    progressBar: React.RefObject<HTMLDivElement>,
    progressed: React.RefObject<HTMLDivElement>,
    widthOfDuration: number,
    onclick: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const ProgressBar: React.FC<progressIP> = ({progressBar,progressed,widthOfDuration,onclick}) => {
  return (
    <div
    className='progress_bar' 
    ref={progressBar} 
    onClick={onclick}>
     <div className='progressed' style={{width: `${widthOfDuration}%`}} ref={progressed}>
     </div>
   </div>
  )
}
