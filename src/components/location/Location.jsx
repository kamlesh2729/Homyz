// import React from 'react'

import Location1 from '../../assets/location/location_img_1.jpg'
import Location2 from '../../assets/location/location_img_2.jpg'
import Location3 from '../../assets/location/location_img_3.jpg'
import Location4 from '../../assets/location/location_img_4.jpg'

const Location = () => {
  return (
    <section id="Location" className="location">
    <h2 className="location_h2">Explore Popular<span className="location_h2_sp">Location</span></h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, neque! Ipsam, laudantium.</p>
    <div className="location_cards">
    <div className="location_cards_card">
    <img src={Location1} alt="location-image" />
    <h3 className="location_cards_card_h3">california        
    <span className="location_cards_card_h3_sp">99 Properties</span>
    </h3>
        </div>
    <div className="location_cards_card">
    <img src={Location2} alt="location-image" />
    <h3 className="location_cards_card_h3">Dhaka        
    <span className="location_cards_card_h3_sp">105 Properties</span>
    </h3>
        </div>
    <div className="location_cards_card">
    <img src={Location4} alt="location-image" />
    <h3 className="location_cards_card_h3">Miami        
    <span className="location_cards_card_h3_sp">115 Properties</span>
    </h3>
        </div>
    <div className="location_cards_card">
    <img src={Location3} alt="location-image" />
    <h3 className="location_cards_card_h3">India        
    <span className="location_cards_card_h3_sp">99 Properties</span>
    </h3>
        </div>
        
    </div>
    </section>
  )
}

export default Location