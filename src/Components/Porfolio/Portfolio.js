import React from "react";
import "./portfolio.scss";

import "../../assets/Styles/darkTheme.scss";
import "../../assets/Styles/lightTheme.scss";
import Line from "../../Components/line/Line";
import { useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";

function Portfolio(props) {
  const light = useSelector((state) => state.theme.light);
  return (
    <>
      <div className={`main-container ${light ? "lightTheme" : " darkTheme"} `}>
        <div className="upper-container f-25">
          <Line />
          <span>Software</span>
          <Line />
        </div>
        <div className="middle-container">
          <span className="frontend f-25">Frontend</span>
          <span className="Name">Ashish</span>
          <span className="backend f-25">Backend</span>
        </div>
        <div className="bottom-container f-25">
          <Line />
          <span>Developer</span>
          <Line />
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default Portfolio;