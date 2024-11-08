// import React from 'react'
import { FiCheck } from "react-icons/fi";
import { FaRegPlayCircle } from "react-icons/fa";
import Imgusers from '../../assets/about/screen_01.webp'

const About = () => {
  return (
    <section id="About" className="about">
      <div className="about_image">
        <h2 className="about_image_h2">Secure Your family&#39;s Dream Home</h2>
        <FaRegPlayCircle />
        <img
          src={Imgusers}
          alt="users-image"
          className="about_image_usersimg"
        />
      </div>
      <div className="container">
      <div className="about_content">
        <h3 className="about_content_h3">Who we are?</h3>
        <p className="about_content_info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nisi
          saepe adipisci illum. Sit delectus ea harum ipsa quos Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, repudiandae.
        </p>
        <div className="about_content_details">
          <h2 className="about_content_details_h2">8+<span className="about_content_details_h2_sp">Years of Exprience</span></h2>
          <h2 className="about_content_details_h2">18+<span className="about_content_details_h2_sp">Projects Compeleted</span></h2>
        </div>
        <p className="about_content_list"><FiCheck />Loan and intrest facility</p>
        <p className="about_content_list"><FiCheck />Over 10k+ property upgrade Regularly</p>
        <p className="about_content_list"><FiCheck />Expert Agent Consltation</p>
        <div className="about_content_btnbox">
          <button className="about_content_btnbox_get">Get Started</button>
          <button className="about_content_btnbox_request">Request A callback</button>
        </div>
      </div>
      </div>
    </section>
  );
}

export default About