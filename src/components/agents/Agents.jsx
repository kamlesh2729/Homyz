// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Agent1 from '../../assets/agent/agent01.webp'
import Agent2 from '../../assets/agent/agent02.webp'
import Agent3 from '../../assets/agent/agent03.webp'
import Agent4 from '../../assets/agent/agent04.webp'

const Agents = () => {
  return (
    <section id="Agents" className="agents">
      <h2 className="agents_h2">
        Our <span className="agents_h2_sp">Agents</span>
      </h2>
      <p className="agents_sub">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto alias
        quo facere!
      </p>
      <Swiper
        autoplay={{ delay: 1500 }}
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={50}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1290: { slidesPerView: 4 },
        }}
        className="agents_cards"
      >
        <SwiperSlide>
          <div className="agents_cards_card">
            <img src={Agent1} alt="agent-profile-img" className="agents_cards_card_img" />
            <h3 className="agents_cards_card_h3">Mark Foli <span className="agents_cards_card_h3_sp">Broker</span> </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="agents_cards_card">
            <img src={Agent2} alt="agent-profile-img" className="agents_cards_card_img" />
            <h3 className="agents_cards_card_h3">Jhon Doe <span className="agents_cards_card_h3_sp">Broker</span></h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="agents_cards_card">
            <img src={Agent4} alt="agent-profile-img" className="agents_cards_card_img" />
            <h3 className="agents_cards_card_h3">Nancy <span className="agents_cards_card_h3_sp">Broker</span></h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="agents_cards_card">
            <img src={Agent3} alt="agent-profile-img" className="agents_cards_card_img" />
            <h3 className="agents_cards_card_h3">Nilesh <span className="agents_cards_card_h3_sp">Broker</span></h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Agents