import React from "react";
import "./index.css";
import Recommended from "../Recommended";
import banner from "../../assets/Banner.svg";
const Banner = () => {
  return (
    <div className="banner-recommended">
      <div className="banner-container">
        <div className="banner-text">
          <p className="banner-text-main">
            Discover Exciting Events Happening Near You - Stay Tuned for
            Updates!
          </p>
          <p className="banner-text-submain">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
          </p>
        </div>
        <div>
          <img src={banner} alt="Banner" className="bannerImg" />
        </div>
      </div>
      <Recommended />
    </div>
  );
};

export default Banner;
