import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const SubHeader = () => {
  return (
    <div className="sub-header">
      <div className="location-marker">
        <HiLocationMarker className="location-icon" />
        Mumbai,India
        <MdOutlineKeyboardArrowRight />
      </div>
      <div className="sub-header-links">
        <a href="/">Live Shows</a>
        <a href="/">Streams</a>
        <a href="/">Movies</a>
        <a href="/">Plays</a>
        <a href="/">Events</a>
        <a href="/">Sports</a>
        <a href="/">Activities</a>
      </div>
    </div>
  );
};

export default SubHeader;
