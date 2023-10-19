import React from 'react'
import { CustomComponentProps } from '../interfaces'
import { mergeClassName } from '../utils';

interface Props extends CustomComponentProps{
    src: string;
}

export const Images = (props: Props) => {
  return (
    <div className= {mergeClassName('bg-primary w-full h-full', props.className )}>
        <img src={props.src} className='w-full h-full' ></img>
    </div>
  )
}
