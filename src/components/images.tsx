import React from 'react'
import { CustomComponentProps } from '../interfaces'
import { mergeClassName } from '../utils';

interface Props extends CustomComponentProps{
    src: string;
}

export const Image = (props: Props) => {
  return (
    <div className= {mergeClassName('bg-primary ', props.className )}>
        <img src={props.src} className='h-[72px] w-[102px]' ></img>
    </div>
  )
}
