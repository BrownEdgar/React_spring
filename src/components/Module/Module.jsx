import React, { Children } from "react";
import "./Module.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";

function Module({ toggleModal, children,theme }) {


  useEffect(() => {
    const handleClick = (e) => {
      const { className } = e.target;
      if (className === "Modal") {
        toggleModal();
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
    window.addEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className='Modal'>
      <div className={`Modal__content Modal__content-${theme}`}>
        {children}
      </div>
    </div>
  )
}

Module.defaultProps = {
  theme: 'light'
}

Module.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['dark', 'light'])
}


export default Module;
