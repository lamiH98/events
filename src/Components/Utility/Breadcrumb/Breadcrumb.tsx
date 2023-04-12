import React from 'react'
import './_breadcrumb.scss'
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import breadcrumbImg from '../../../assets/images/breadcrumb/breadcrumb-2.png'
import breadcrumbImg2 from '../../../assets/images/breadcrumb/breadcrumb-3.png'

type Props = {
	title: string;
	children?: JSX.Element;
}

const Breadcrumb: React.FC<Props> = ({ title, children }: Props) => {
  return (
		<div className="breadcrumb">
			<div className="images">
				<img src={breadcrumbImg} alt="" />
				<img src={breadcrumbImg2} alt="" />
			</div>
			<Container>
				<div className="content d-flex align-items-center justify-content-center flex-column">
					<h2 className='title'>{title}</h2>
					<ul className='list-unstyled d-flex'>
						<li><NavLink to="/">Home</NavLink></li>
						<li>{title}</li>
						{ children }
					</ul>
				</div>
			</Container>
		</div>
		
  )
}

export default Breadcrumb