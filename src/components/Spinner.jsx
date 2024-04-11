import React from "react";
import SpinnerImg from "../assets/Spinner.gif";
const Spinner = () => {
  return (
    <div className="spinnerContainer">
      <img src={SpinnerImg} alt="loading" className="spinner" />
    </div>
  );
};

export default Spinner;
