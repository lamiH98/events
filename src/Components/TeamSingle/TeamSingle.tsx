import React from 'react'
import { Link } from 'react-router-dom'
import teamInterface from '../../ts/Interfaces/teamInterface'
import './_teamSingle.scss'

const TeamSingle: React.FC<teamInterface> = ({ speaker }: teamInterface) => {
  return (
    <div className='team-single'>
			<div className="team-img">
				<img src={speaker.img} style={{ borderColor: speaker.color }} alt="" />
			</div>
			<div className="team-content">
				<Link to={'/speakers/' + speaker.slug}><h5 className='name'>{speaker.name}</h5></Link>
				{/* <Link to={`/speakers/${speaker.slug}`}><h5 className='name'>{speaker.name}</h5></Link> */}
				<span>{speaker.job}</span>
				<div className="circle" style={{ backgroundColor: speaker.color }}></div>
			</div>
    </div>
  )
}

export default TeamSingle
