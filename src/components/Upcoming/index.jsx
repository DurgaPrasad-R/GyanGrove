import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./index.css";
import Spinner from "../Spinner";

const Upcoming = () => {
  const [upComing, setupComing] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getUpComing = async (pageNum) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageNum}&type=upcoming`
      );
      const data = await response.json();
      setupComing((prevEvents) => [...prevEvents, ...data.events]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching upcoming events:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUpComing(page);
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const formattedDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div className="upComingSection">
      <div className="seeMore">
        <p className="heading">
          Upcoming events <FaArrowRightLong />
        </p>
        <p>
          <a href="#seeall" className="seeMoreLink">
            See all
          </a>
        </p>
      </div>
      <div className="upcoming-container">
        {upComing.length > 0 ? (
          upComing.map((event, index) => {
            const url = event.imgUrl;
            const startIndex = url.indexOf("/d/") + 3;
            const endIndex = url.indexOf("/view");
            const fileId = url.substring(startIndex, endIndex);
            const newUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
            return (
              <div key={index} className="upcoming-card">
                <div className="upComingImgContainer">
                  <img
                    src={newUrl}
                    alt={event.eventName}
                    className="upComingeventImg"
                  />
                  <div className="upComingeventDateContainer">
                    <p className="upComingeventDate">
                      {formattedDate(event.date)}
                    </p>
                  </div>
                </div>
                <div className="upComingContent">
                  <p className="upComingeventName h1">{event.eventName}</p>
                  <div className="city-weatherPack">
                    <p className="upComingeventCity">{event.cityName}</p>
                    <div className="weather-dist">
                      <p className="upComingeventWeather">{event.weather}</p>|
                      <p className="upComingeventDist">
                        {parseInt(event.distanceKm / 100)}
                      </p>
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
      {page < 6 ? (
        <div className="Button">
          {loading ? (
            <Spinner />
          ) : (
            <button onClick={loadMore} className="load-more">
              Click me to Load More Events
            </button>
          )}
        </div>
      ) : (
        <p
          style={{
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          No more UpComing events
        </p>
      )}
    </div>
  );
};

export default Upcoming;
