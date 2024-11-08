// import React from 'react'

const banner = () => {
  return (
    <section className="banner">
      <div className="banner_right">
        <h2 className="banner_right_h2">Exclisive Monthly<span className="banner_right_h2_sp">Deal for You</span></h2>
        <p className="banner_right_sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, iure?</p>
        <button className="banner_right_btn">More Details</button>
    </div>
      <div className="banner_left">
        <div className="banner_left_box">
          <div className="banner_left_box_card1">
        <span className="banner_left_box_card1_sp">For Sale</span>
        <p className="banner_left_box_card1_p">mirapur 10, Stadium Dhaka</p>
        </div>
          <div className="banner_left_box_card2">
        <h2>Luxury Fisa Vila Orkit</h2>
          <h2>$2,00,999</h2>
          </div>
          <div></div>
        </div>
        <div className="banner_left_box2"><p>Check Full Details</p></div>
    </div>
    </section>
  )
}

export default banner