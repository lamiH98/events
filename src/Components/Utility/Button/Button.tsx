import React from 'react'
import './_button.scss'

interface ButtonInterface {
	title: string;
	backgroundColor?: string;
	type?: string;
}

const Button: React.FC<ButtonInterface> = ({ title , backgroundColor, type}) => {
  return (
    <div className='custom-button' style={{ backgroundColor: backgroundColor ?? 'blue' }}>
      {title}
    </div>
  )
}

export default Button
