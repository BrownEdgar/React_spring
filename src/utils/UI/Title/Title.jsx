import React from 'react'
import './Title.scss'
import classNames from 'classnames'
export default function Title({title, variant = 'dark', as = 'h1', align = 'left'}) {
    const Element = as
    return (
        <Element className={classNames('Title', {
            [`Title-${variant}`]: true,
            [`Title-${align}`]: true
        })}>
            {title}
        </Element>
    )
}
