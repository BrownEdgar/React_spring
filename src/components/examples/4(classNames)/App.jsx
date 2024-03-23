import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './App.scss'

export default function App({ theme }) {

  const [count, setCount] = useState(0)
  return (
    // <div className={`App ${count > 10 ? "App-black" : ''}`}>
    <div className={classNames("App", {
      [`App-${theme}`]: true,
    })}>
      <h1>Classnames Count : {count}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, voluptates! Velit possimus, dolore distinctio maxime laborum libero ab quaerat error vitae delectus sint saepe, officia suscipit perspiciatis doloribus corrupti, repudiandae fugit tempore nostrum perferendis! Sequi commodi eos quam quod aspernatur!</p>
      <button onClick={() => setCount(count + 1)}>add count</button>
    </div>
  )
}

App.defaultProps = {
  theme: "black"
}

App.propsTypes = {
  theme: PropTypes.oneOf(['black', 'pink'])
}