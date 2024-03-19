import React from 'react'

import Loader from '../../../assets/simple_loader.svg';
import './CircleLoader.scss'

export default function CircleLoader() {
  return (
    <div className='Loader Loader-circle'>
      <img src={Loader} alt="Loader" />
    </div>
  )
}
