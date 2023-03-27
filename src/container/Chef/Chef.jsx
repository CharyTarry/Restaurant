import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app_bg app_wrapper section_padding">
    <div className="app_wrapper_img app_wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" style={{height:'900px'}}/>
    </div>
    <div className="app_wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext_cormorant">What we believe in</h1>

      <div className="app_chef-content">
        <div className="app_chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p_opensans">Fresh ingredients, bold flavors, and passion create a truly unforgettable dish.</p>
        </div>
        <p className="p_opensans"> I am passionate about creating dishes that not only taste great but also reflect my commitment to quality and innovation. I hope that every bite you take at our restaurant will be a unique and unforgettable culinary experience.</p>
      </div>

      <div className="app_chef-sign">
        <p>Kevin Luo</p>
        <p className="p_opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;