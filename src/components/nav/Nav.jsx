import { useState } from 'react'
import Logo from '../../assets/logo/logo2.png'
import { FiAlignJustify, FiX } from "react-icons/fi";

const Nav = () => {
  const [mobnav, setMobnav] = useState(false);

   const openMenu = () => {
     setMobnav(!mobnav);
   };

  return (
    <nav className="nav">
      <div className="nav_logobox">
        <a href="/" className='nav_logobox_a'>
          <img src={Logo} alt="Homyz-log" className='nav_logobox_logo' />
        </a>
      </div>
      <div className={`nav_listbox ${mobnav ? "mobnav":""}`}>
        <button className='nav_listbox_close' onClick={openMenu}><FiX /></button>
        <ul className="nav_listbox_ul">
        <li className="nav_listbox_ul_li"><a href="/" className='nav_listbox_ul_li_a'>Home</a></li>
        <li className="nav_listbox_ul_li"><a href="#Advantage" className='nav_listbox_ul_li_a'>Advantage</a></li>
        <li className="nav_listbox_ul_li"><a href="#About" className='nav_listbox_ul_li_a'>About</a></li>
        <li className="nav_listbox_ul_li"><a href="#Location" className='nav_listbox_ul_li_a'>Location</a></li>
        <li className="nav_listbox_ul_li"><a href="#Property" className='nav_listbox_ul_li_a'>Properties</a></li>
        <li className="nav_listbox_ul_li"><a href="#Agents" className='nav_listbox_ul_li_a'>Agents</a></li>
        <li className="nav_listbox_ul_li"><a href="#Estimate" className='nav_listbox_ul_li_a'>Estimate</a></li>
        <li className="nav_listbox_ul_li"><a href="#Contact" className='nav_listbox_ul_li_a'>Contact</a></li>
          
        </ul>
      </div>
      <div className="nav_btnbox">
        <button className='nav_btnbox_login'>Login</button>
        <button className='nav_btnbox_listing'>Add Listing</button>
        <span className='nav_btnbox_menu' onClick={openMenu}><FiAlignJustify /></span>
        </div>
    </nav>
  );
}

export default Nav