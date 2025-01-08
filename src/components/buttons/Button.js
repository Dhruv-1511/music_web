import React from 'react'
import { blueColor } from '../../assets/color'
import './button.css'

function Button({handleClick, title, bgColor}) {
  return (
    <button 
        className='custom-button'
        onClick={handleClick}
        style={
            {
                backgroundColor: bgColor ? bgColor : 'transparent',
                border: bgColor ? 'none' : `1px solid ${blueColor}`,
                borderRadius: '6px',
                height: '30px',
                color: bgColor ? 'white' : blueColor,
                fontSize: '16px',   
                width: '100%',
                height: '40px',
                paddingInline: '12px',
                cursor: 'pointer'
            }
        }
    >
        {title} 
    </button>
  )
}

export default Button