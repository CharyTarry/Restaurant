import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app_header app_wrapper section_padding" id="home">
    <div className="app_wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app_header-h1">The Key To Fine Dining</h1>
      <p className="p_opensans" style={{ margin: '2rem 0' }}>Discover a culinary journey like no other at our restaurant, where the freshest ingredients meet innovation and passion. </p>
      <button type="button" className="custom_button">Explore Menu</button>
    </div>

    <div className="app_wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;