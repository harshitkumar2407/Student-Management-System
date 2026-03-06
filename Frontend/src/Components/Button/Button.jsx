import React from 'react'
import "./Button.css"

const Button = ({
    children,
    onClick,
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    // name =""
    }) => {

  return (
    <button
        className={`btn  btn-${variant} btn-${size} ${loading ?  "btn-loading" : ""} `}
        onClick={onClick}
        disabled = {disabled || loading }
        >
            {
                loading ? <span className='spinner'></span>:children
            }
    </button>
  )
}

export default Button