import React, { useEffect, useState } from 'react'
import './ToDoDel.scss'
import PropTypes from 'prop-types'

export default function ToDoDel({toggleToDo, children}) {

  useEffect(() => {
    const click = (e) => {
      const {className} = e.target
      className === 'Modal' ? toggleToDo () : false
    }
    window.addEventListener('click', click)

    return () => {
      window.removeEventListener('click', click)
    }
  }, [])

  return (
    <div className="ToDoDel">
      <div className="ToDoDel__content">
        {children}
      </div>
    </div>
  )
  
}

ToDoDel.propTypes = {
  toggleToDo: PropTypes.func.isRequired
}
