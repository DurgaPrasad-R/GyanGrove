import React from "react";
import "./index.css";
import { MdMenu } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="mainHeader">
      <div className="logo">BookUsNow</div>
      <div className="infoBar">
        <div className="categories">
          <MdMenu />
          Categories
        </div>
        <div className="searchBar">
          <input type="text" placeholder="DJI phantom" />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="infoBar">
        <div className="favoriteBar">
          <FaHeart className="search-icon" />
          Favorites
        </div>
        <div className="signInBtn">Sign In</div>
      </div>
    </div>
  );
};

export default Header;
