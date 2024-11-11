// import React from 'react'

import icon1 from '../../assets/icons/map_icon01.svg'
import icon2 from '../../assets/icons/map_icon02.svg'
import icon3 from '../../assets/icons/map_icon03.svg'

const Estimate = () => {
  return (
    <section id="Estimate" className="estimate">
      <h2 className="estimate_h2">We Are to Help <br /> You Get
        <span className="estimate_h2_sp">Your Dream house</span>
    </h2>
    <p className="estimate_sub">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, neque!
        Ipsam, laudantium.</p>
        <div className="estimate_cards">
        <div className="estimate_cards_card">
        <img src={icon1} alt="estimate-img" className="estimate_cards_card_img" />
        <h3 className="estimate_cards_card_h3">Create Your Account
        <span className="estimate_cards_card_h3_sp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, beatae? Mollitia dolores excepturi libero fuga ea explicabo laudantium! Quod, reprehenderit.</span>
        </h3>
        </div>
        <div className="estimate_cards_card">
        <img src={icon2} alt="estimate-img" className="estimate_cards_card_img" />
        <h3 className="estimate_cards_card_h3">Find Home
        <span className="estimate_cards_card_h3_sp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, beatae? Mollitia dolores excepturi libero fuga ea explicabo laudantium! Quod, reprehenderit.</span>
        </h3>
        </div>
        <div className="estimate_cards_card">
        <img src={icon3} alt="estimate-img" className="estimate_cards_card_img" />
        <h3 className="estimate_cards_card_h3">Quick Process
        <span className="estimate_cards_card_h3_sp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, beatae? Mollitia dolores excepturi libero fuga ea explicabo laudantium! Quod, reprehenderit.</span>
        </h3>
        </div>
        </div>
    </section>
  );
}

export default Estimate;