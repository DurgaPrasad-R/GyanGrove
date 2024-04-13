import React from "react";
import "./index.css";
import { MdMenu } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
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
        <div className="utility">
          <FaSearch className="small-search-icon" />
        </div>
        <div className="favoriteBar">
          <FaHeart className="search-icon" />
          <div className="fav">Favorites</div>
        </div>
        <div className="utility">
          <IoPerson />
        </div>
        <div className="signInBtn">Sign In</div>
      </div>
    </div>
  );
};

export default Header;
