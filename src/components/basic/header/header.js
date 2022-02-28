import React from "react";
import "./header.css";
import psm from "./psm.jpg";

function HomepageHeader(props) {
  return (
    <div>
      <div className="header-container-2">
        <img src={psm} alt="company logo" className="logo" />
      </div>
    </div>
  );
}

export default HomepageHeader;
