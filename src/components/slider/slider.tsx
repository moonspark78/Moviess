import React from 'react'
import './slider.css'
import Slick, { Settings } from "react-slick";


export const slider = (props: Settings) => {
  return <Slick  {... props } autoplaySpeed={5000}> {props.children}</Slick>
}
