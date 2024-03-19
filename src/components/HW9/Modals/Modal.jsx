import PropTypes from 'prop-types' 
import React, { useEffect } from 'react'; 
 
import "./Modal.scss" 
 
export default function Modal({ toggleModal, children}) { 
   
 
  useEffect(() => { 
    function hendleClick(e) { 
      const { className } = e.target 
      if (className== 'Modal') { 
          toggleModal() 
      } 
       
    } 
    window.addEventListener('click',hendleClick) 
    return () => { 
      window.removeEventListener('click', hendleClick) 
      
    } 
  }, []) 
   
  return ( 
    <> 
      <div className="Modal"> 
        <div className={`Modal__content`}> 
        {children} 
        </div> 
        </div> 
    </> 
  ); 
} 
 

 
Modal.propTypes = { 
  toggleModal: PropTypes.func.isRequired, 
}