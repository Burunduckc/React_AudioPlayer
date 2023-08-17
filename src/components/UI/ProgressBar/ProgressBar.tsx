import React, {RefObject, MouseEvent, FC} from 'react'

interface progressIP{
    progressBar: RefObject<HTMLDivElement>,
    progressed: RefObject<HTMLDivElement>,
    widthOfDuration: number,
    onclick: (event: MouseEvent<HTMLDivElement>) => void
}

export const ProgressBar: FC<progressIP> = ({progressBar,progressed,widthOfDuration,onclick}) => {
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
