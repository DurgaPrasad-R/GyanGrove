import React from "react";
import banner from "../assets/Banner.svg";
const Banner = () => {
  return (
    <div className="banner-container">
      <p className="banner-header">
        Discover Exciting Events Happening Near You - Stay Tuned for Updates
      </p>
      <img src={banner} alt="Banner" />
    </div>
  );
};

export default Banner;
