import React from 'react'
import PropTypes from 'prop-types'

export default function Child({ title, age }) {
  return (
    <div>
      <h2>
        {title}
      </h2>
      <p>Age: {age} </p>
    </div>
  )
}

Child.defaultProps = {
  age: 21
}

Child.propTypes = {
  title: PropTypes.string.isRequired,
  // age: PropTypes.number,
  // isActive: PropTypes.bool,
  // onClick: PropTypes.func,
  arr: PropTypes.arrayOf(PropTypes.string).isRequired
}