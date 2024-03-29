import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app_footer section_padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app_footer-links">
      <div className="app_footer-links_contact">
        <h1 className="app_footer-headtext">Contact Us</h1>
        <p className="p_opensans">10011 NAIROBI</p>
        <p className="p_opensans">+254 712 345 678</p>
        <p className="p_opensans">+254 112 764 698</p>
      </div>

      <div className="app_footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p_opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} alt="spoonimg" className="spoon_img" style={{ marginTop: 15 }} />
        <div className="app_footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app_footer-links_work">
        <h1 className="app_footer-headtext">Working Hours</h1>
        <p className="p_opensans">Monday-Friday:</p>
        <p className="p_opensans">08:00 am - 12:00 am</p>
        <p className="p_opensans">Saturday-Sunday:</p>
        <p className="p_opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer_copyright">
      <p className="p_opensans">2023 Gericht. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;