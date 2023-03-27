import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app_aboutus app_bg flex_center section_padding" id="about">
    
    <div className="app_aboutus-content flex_center">
      <div className="app_aboutus-content_about">
        <h1 className="headtext_cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img" />
        <p className="p_opensans">Our restaurant sources local, high-quality ingredients to create a memorable dining experience that reflects our commitment to sustainability and culinary innovation.</p>
        <button type="button" className="custom_button">Know More</button>
      </div>

      <div className="app_aboutus-content_knife flex_center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app_aboutus-content_history">
        <h1 className="headtext_cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img" />
        <p className="p_opensans">Our restaurant has a rich history dating back to 2011. Since then, we have been serving our community with the highest quality food and exceptional service. Over the years, we have evolved with the times while staying true to our roots, and we remain committed to providing our guests with an unforgettable dining experience.</p>
        <button type="button" className="custom_button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
<div className="app_aboutus-overlay flex_center">
      <img src={images.G} alt="G_overlay" />
</div>