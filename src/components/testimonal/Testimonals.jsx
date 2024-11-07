// import React from 'react'

import User1 from '../../assets/user/user1.jpg';
import User2 from '../../assets/user/user02.webp';
import User3 from '../../assets/user/user2.jpg';
import Rating from '../../assets/rating_01.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";

const Testimonals = () => {
  return (
    <section className="testimonals">
      <Swiper autoplay={{ delay: 2500 }} loop={true} modules={[Autoplay]}>
        <SwiperSlide>
          <div className="testimonals_slidebox">
            <div className="testimonals_slidebox_user1">
              <img
                src={User1}
                alt="User-img"
                className="testimonals_slidebox_user1_img"
              />
              <h3 className="testimonals_slidebox_user1_name">
                Nancy Paras
                <span className="testimonals_slidebox_user1_name_sp">
                  Bold Liquid pvt ltd
                </span>
              </h3>
            </div>
            <div className="testimonals_slidebox_usercontent">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
              vero.
            </div>
            <div className="testimonals_slidebox_rating">
              <img
                src={Rating}
                alt="rating-img"
                className="testimonals_slidebox_rating_img"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonals_slidebox">
            <div className="testimonals_slidebox_user2">
              <img
                src={User2}
                alt="user=img"
                className="testimonals_slidebox_user2_img"
              />
              <h3 className="testimonals_slidebox_user2_name">
                Jonthan Harry
                <span className="testimonals_slidebox_user2_name_sp">
                  Bold Liquid pvt ltd
                </span>
              </h3>
            </div>
            <div className="testimonals_slidebox_usercontent">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
              vero.
            </div>
            <div className="testimonals_slidebox_rating">
              <img
                src={Rating}
                alt="rating-img"
                className="testimonals_slidebox_rating_img"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonals_slidebox">
            <div className="testimonals_slidebox_user3">
              <img
                src={User3}
                alt="user-img"
                className="testimonals_slidebox_user3_img"
              />
              <h3 className="testimonals_slidebox_user3_name">
                Jack Donwen
                <span className="testimonals_slidebox_user3_name_sp">Bold Liquid pvt ltd</span>
              </h3>
            </div>
            <div className="testimonals_slidebox_usercontent">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
              vero.
            </div>
            <div className="testimonals_slidebox_rating">
              <img
                src={Rating}
                alt="rating-img"
                className="testimonals_slidebox_rating_img"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonals