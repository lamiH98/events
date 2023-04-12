import React from 'react'
import './_titleSection.scss'
import leftDivider from '../../../assets/images/divider/divider.png'
import centerDivider from '../../../assets/images/divider/divider-center.png'
import TitleSectionProps from '../../../ts/Interfaces/TitleInterface'

const TitleSection: React.FC<TitleSectionProps> = ({ title, subTitle, center = true }) => {
  return (
    <div className={`title-section ${center ? 'text-center' : ''}`}>
			<h5 className="subTitle">{title}</h5>
			<h2 className={`title ${ center ? 'center-title' : '' }`}>{subTitle}</h2>
			<img src={center ? centerDivider : leftDivider } alt="" />
    </div>
  )
}

export default TitleSection
