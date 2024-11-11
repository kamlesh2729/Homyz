// import React from 'react'

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="Contact" className="contact">
    <div className="contact_cbox">
    <h2 className="contact_cbox_h2">Any Enquiry Feel Free to <span className="contact_cbox_h2_sp">Contact Us</span></h2>
    </div>
    <div className="contact_footer">
    <div className="conatct_footer_box1">
      <h3 className="contact_footer_box1_h3">Homyz</h3>
      <p className="contact_footer_box1_sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam soluta iusto.</p>
      <div className="contact_footer_box1_social">
          <span><FaFacebookF/></span>
          <span><FaInstagram/></span>
          <span><FaXTwitter/></span>
          <span><RiYoutubeLine/></span>
      </div>
    </div>
    <ul className="contact_footer_box2">
      <h3 className="contact_footer_box2_h3">Quick Links</h3>
      <li className="contact_footer_box2_li">Home</li>
      <li className="contact_footer_box2_li">MemberShop</li>
      <li className="contact_footer_box2_li">About Us</li>
      <li className="contact_footer_box2_li">Blog</li>
      <li className="contact_footer_box2_li">Pricing</li>
    </ul>
    <ul className="contact_footer_box2">
      <h3 className="contact_footer_box2_h3">Legal</h3>
      <li className="contact_footer_box2_li">Terms & Conditions</li>
      <li className="contact_footer_box2_li">Cookie Policy</li>
      <li className="contact_footer_box2_li">Privacy Policy</li>
    </ul>
    <ul className="contact_footer_box2">
      <h3 className="contact_footer_box2_h3">New Property</h3>
      <li className="contact_footer_box2_li">New Houses</li>
      <li className="contact_footer_box2_li">New Vilas</li>
      <li className="contact_footer_box2_li">New Industrial</li>
    </ul>
    </div>
    </section>
  )
}

export default Contact