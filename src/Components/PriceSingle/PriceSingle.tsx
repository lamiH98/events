import React from 'react'
import { FaCheck } from 'react-icons/fa';
import priceInterface from '../../ts/Interfaces/priceInterface';
import Button from '../Utility/Button/Button';
import './_priceSingle.scss'

const PriceSingle: React.FC<priceInterface> = ({ price }: priceInterface) => {
  return (
    <div className={`price-single ${price.active ? 'active' : ''}`}>
      <div className="title-section">
				<span>{price.subTitle}</span>
				<h3>{price.title}</h3>
			</div>
			<div className="price-number">
				<sup className="sign">$</sup>
				<span>{price.price}</span>
			</div>
			<ul className="price-info list-unstyled">
				{
					price.info.map((info, index) => (
						<li key={index}><FaCheck className='icon' />{info}</li>
					))
				}
			</ul>
			<Button title="Buy Ticket" backgroundColor={price.bgColor} />
    </div>
  )
}

export default PriceSingle
