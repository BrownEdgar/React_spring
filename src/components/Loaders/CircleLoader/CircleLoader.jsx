import React from 'react'
import './CircleLoader.scss'
import Loader from '../../../assets/load.svg'

export default function CircleLoader() {
    return (
        <div className='Loader Loader-circle'>
            <img src={Loader} alt="Loader" />
        </div>
    )
}
