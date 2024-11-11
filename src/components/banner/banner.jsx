// import React from 'react'

import { RiHeart3Line, RiBookmarkLine, RiAddCircleLine, RiArrowRightLine } from "react-icons/ri";

const banner = () => {
  return (
    <section className="banner">
      <div className="banner_right">
        <h2 className="banner_right_h2">Exclisive Monthly <br/><span className="banner_right_h2_sp">Deal for You</span></h2>
        <p className="banner_right_sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className="banner_right_btn">More Details</button>
    </div>
      <div className="banner_left">
        <div className="banner_left_box">
          <div className="banner_left_box_card1">
        <span className="banner_left_box_card1_sp">For Sale</span>
        <p className="banner_left_box_card1_p">mirapur 10, Stadium Dhaka</p>
        </div>
          <div className="banner_left_box_card2">
        <h3 className="banner_left_box_card2_title">Luxury Fisa <br/> Vila Orkit</h3>
          <h2 className="banner_left_box_card2_price">$2,00,999</h2>
          </div>
          <div className="banner_left_box_card3">
          <div className="banner_left_box_card3_icons">
              <RiHeart3Line />
              <RiBookmarkLine />
              <RiAddCircleLine/>
          </div>
          <div className="banner_left_box_card3_info">
          <p className="banner_left_box_card3_info_po">2135<span className="banner_left_box_card3_info_po_sp">sqft</span></p>
          <p className="banner_left_box_card3_info_po">03<span className="banner_left_box_card3_info_po_sp">Bed</span></p>
          <p className="banner_left_box_card3_info_po">03<span className="banner_left_box_card3_info_po_sp">Bath</span></p>  
          </div>
          </div>
        </div>
        <div className="banner_left_box2">
          <p className="banner_left_box2_p">Check Full Details</p>
          <RiArrowRightLine/>
        </div>
    </div>
    </section>
  )
}

export default banner