import React from 'react'
import  classNames   from "classnames";
import "./Title.scss"

export default function Title({title, variant = "dark", as= "h1",align ="center"}) {
    const Element = as;
  return (
    <Element className={classNames('Title',{
        [`Title-${variant}`]: true,
        [`Title-${align}`]: true
    })}>
        {title}
    </Element>
  )
}
