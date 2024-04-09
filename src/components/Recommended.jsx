import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
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

  return (
    <div>
      <h1>
        Recommended Shows <FaArrowRightLong />
      </h1>
      <div className="recommended-container">
        {recommended ? (
          recommended.map((event) => {
            const url = event.imgUrl;
            const startIndex = url.indexOf("/d/") + 3;
            const endIndex = url.indexOf("/view");
            const fileId = url.substring(startIndex, endIndex);
            const newUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
            return (
              <div key={event.eventName} className="recommended-card">
                <div className="eventContent">
                  <p className="eventName">{event.eventName}</p>
                  <p className="eventCity">{event.cityName}</p>
                  <p className="eventDate">{event.date}</p>
                  <p className="eventWeather">{event.weather}</p>
                  <p className="eventDist">{event.distanceKm / 100}</p>
                </div>
                <div className="eventImg">
                  <img
                    src={newUrl}
                    alt={event.eventName}
                    className="eventImg"
                  />
                </div>
              </div>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Recommended;
