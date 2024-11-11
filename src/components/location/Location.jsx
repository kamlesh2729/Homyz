import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Location1 from '../../assets/location/location_img_1.jpg'
import Location2 from '../../assets/location/location_img_2.jpg'
import Location3 from '../../assets/location/location_img_3.jpg'
import Location4 from '../../assets/location/location_img_4.jpg'

const Location = () => {
  return (
    <section id="Location" className="location">
      <h2 className="location_h2">
        Explore Popular<span className="location_h2_sp">Location</span>
      </h2>
      <p className="location_sub">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, neque!
        Ipsam, laudantium.
      </p>
      <Swiper
        autoplay={{ delay: 1500 }}
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        className="location_cards"
      >
        <SwiperSlide>
          <div className="location_cards_card">
            <img
              src={Location1}
              alt="location-image"
              className="location_cards_card_img"
            />
            <h3 className="location_cards_card_h3">
              california
              <span className="location_cards_card_h3_sp">99 Properties</span>
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="location_cards_card">
            <img
              src={Location2}
              alt="location-image"
              className="location_cards_card_img"
            />
            <h3 className="location_cards_card_h3">
              Dhaka
              <span className="location_cards_card_h3_sp">105 Properties</span>
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="location_cards_card">
            <img
              src={Location4}
              alt="location-image"
              className="location_cards_card_img"
            />
            <h3 className="location_cards_card_h3">
              Miami
              <span className="location_cards_card_h3_sp">115 Properties</span>
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="location_cards_card">
            <img
              src={Location3}
              alt="location-image"
              className="location_cards_card_img"
            />
            <h3 className="location_cards_card_h3">
              India
              <span className="location_cards_card_h3_sp">99 Properties</span>
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="location_cards_card">
            <img
              src={Location2}
              alt="location-image"
              className="location_cards_card_img"
            />
            <h3 className="location_cards_card_h3">
              Dhaka
              <span className="location_cards_card_h3_sp">105 Properties</span>
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Location