// import React from 'react'

import Buy from '../../assets/icons/icon_01.svg'
import Rent from '../../assets/icons/icon_02.svg'
import Sell from '../../assets/icons/icon_03.svg'

const Advantage = () => {
  return (
    <section id="Advantage" className='advantage'>
      <h2 className='advantage_title'>Unlock homyz&#39;s <span className='advantage_title_sp'>Advantage</span></h2>
      <p className='advantage_sub'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto vero nihil magnam.</p>
      <div className="advantage_cards">
      <div className='advantage_cards_card'>
        <img src={Buy} alt="advantage-icon" className='advantage_cards_card_img' />
        <h3 className='advantage_cards_card_h3'>Buy A Home</h3>
        <p className='advantage_cards_card_content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus minus dicta perferendis</p>
      </div>
      <div className='advantage_cards_card'>
        <img src={Rent} alt="advantage-icon" className='advantage_cards_card_img' />
        <h3 className='advantage_cards_card_h3'>Rent A Home</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi molestias quisquam minima.</p>
      </div>
      <div className='advantage_cards_card'>
        <img src={Sell} alt="advantage-icon" className='advantage_cards_card_img' />
        <h3 className='advantage_cards_card_h3'>Sell property</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur vitae aut.</p>
      </div>
    </div>
    </section>
  )
}

export default Advantage