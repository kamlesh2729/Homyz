// import React from 'react'

import { TbSearch } from "react-icons/tb";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero_h1">
        Get The Ideal Home for Your <span className="hero_h1_sp">Family</span>
      </h1>
      <p className="hero_p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        blanditiis expedita recusandae.
      </p>
      <div className="hero_container">
      <div className="hero_searchbox">
        <div className="hero_searchbox_box1">
          <small className="hero_searchbox_box1_title">Im looking to..</small>
          <input
            type="text"
            id=""
            className="hero_searchbox_box1_input"
            placeholder="search for homes"
          />
        </div>
        <div className="hero_searchbox_box2">
          <small className="hero_searchbox_box2_title">location</small>
          <select id="" className="hero_searchbox_box2_wrapper">
            <option value="India">India</option>
            <option value="New York">New York</option>
            <option value="Canada">Canada</option>
            <option value="Usa">Usa</option>
          </select>
        </div>
        <div className="hero_searchbox_box3">
          <small className="hero_searchbox_box3_title">Price-Range</small>
          <select id="" className="hero_searchbox_box3_wrapper">
            <option value="Prime">$1000-$2000</option>
            <option value="Silver">$3000-$5000</option>
            <option value="Gold">$6000-$7000</option>
            <option value="Primium">$8000-$12000</option>
          </select>
        </div>
        <div className="hero_searchbox_box4">
        <button type="submit" className="hero_searchbox_box4_btn">search<TbSearch /></button>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero