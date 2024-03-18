import React from 'react'
import './Modal.scss'
import PropTypes from 'prop-types'
import { useEffect } from 'react'



export default function Modal({toggleModal, children, theme}) {

    useEffect(() => {
        const handleClick = (e) => {
            const {className} = e.target
            if (className === 'Modal') {
                toggleModal()
            }
        }
        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, [])
    
    return (
        <div className='Modal'>
            <div className={`Modal__content Modal__content-${theme}`}>
                {children}
            </div>
        </div>
    )
}

Modal.defaultProps = {
    theme:'light'
}
Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    theme: PropTypes.oneOf(['dark','light'])
}