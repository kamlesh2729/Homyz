// import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { TbBed } from "react-icons/tb";
import { BsArrowsAngleContract } from "react-icons/bs";
import { RiShowersLine } from "react-icons/ri";
import Data from './data.json'

const Property = () => {
  return (
    <section id="Property" className="property">
    <h2 className="property_h2">New <span className="property_h2_sp">Property</span></h2>
    <p className='property_sub'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, debitis.</p>
    <div className="property_cards">
        {Data.map((property,i) => {
          return (
    <div key={i} className='property_cards_card'>
    <div className="property_cards_card_imgbox">            
    <img src={property.image} alt="property-image" className='property_cards_card_imgbox_img' />
    </div>
    <h2 className='property_cards_card_name'>{ property.name}</h2>
    <p className='property_cards_card_location'>{ property.location}</p>
    <div className='property_cards_card_infobox'>
      <span><BsArrowsAngleContract /> {property.area} Sq Ft</span>
      <span><TbBed /> {property.Room} Bed</span>
      <span><RiShowersLine /> {property.shower} Showers</span>
    </div>
    <h2 className='property_cards_card_price'>$ {property.price}/-<span><FiArrowUpRight /></span></h2>
    </div>
    )
    })}
    </div>
    </section>
  )
}

export default Property