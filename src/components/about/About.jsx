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
        <img src={Imgusers} alt="users-image" className="about_image_usersimg" />
      </div>
      <div className="about_content">
        <h3>Who we are?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nisi
          saepe adipisci illum. Sit delectus ea harum ipsa quos
        </p>
        <div>
          <h2>
            8+<span>Years of Exprience</span>
          </h2>
          <h2>
            18+<span>Projects Compeleted</span>
          </h2>
        </div>
        <p>
          <FiCheck />
          Loan and intrest facility
        </p>
        <p>
          <FiCheck />
          Over 10k+ property upgrade Regularly
        </p>
        <p>
          <FiCheck />
          Expert Agent Consltation
        </p>
        <div>
          <button>Get Started</button>
          <button>Request A callback</button>
        </div>
      </div>
    </section>
  );
}

export default About