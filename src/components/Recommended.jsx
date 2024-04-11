import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import Spinner from "./Spinner";
const Recommended = () => {
  const [recommended, setRecommended] = useState([]);
  useEffect(() => {
    getRecommended();
  }, []);

  async function getRecommended() {
    const response = await fetch(
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
    );
    const data = await response.json();
    setRecommended(data.events);
  }

  // function to format date in the form of "Month Date,Year"
  const formattedDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div className="recommendedSection">
      <p className="heading" style={{color:"white"}}>
        Recommended shows <FaArrowRightLong />
      </p>
      <div className="recommended-container">
        {recommended.length > 0 ? (
          recommended.map((event) => {
            const url = event.imgUrl;
            const startIndex = url.indexOf("/d/") + 3;
            const endIndex = url.indexOf("/view");
            const fileId = url.substring(startIndex, endIndex);
            const newUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
            return (
              <div key={event.eventName} className="recommended-card">
                <div className="eventImgContainer">
                  <img
                    src={newUrl}
                    alt={event.eventName}
                    className="eventImg"
                  />
                  <div className="eventContent">
                    <div className="city-weatherPack">
                      <p className="eventName">{event.eventName}</p>
                      <p className="eventDate">{formattedDate(event.date)}</p>
                    </div>
                    <div className="city-weatherPack">
                      <p className="eventCity">
                        <HiLocationMarker />
                        {event.cityName}
                      </p>
                      <div className="weather-dist">
                        <p className="eventWeather">{event.weather}</p>|
                        <p className="eventDist">
                          {parseInt(event.distanceKm / 100)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Recommended;
