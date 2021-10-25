import React from "react";
import Carousel from "react-material-ui-carousel";

import "./body.css";
import imag from "../image/we.jpeg";

function Body() {
  return (
    <>
      <Carousel indicators={false} strictIndexing={false} interval={10000}>
        <div className="img__tag">
          <img src={imag} alt="welcome" className="patricia" />
        </div>
        <div className="text__tag">
          <h1>Am Nalwanga Patricia</h1>
          <h5>Frontend Developer</h5>
        </div>
      </Carousel>
    </>
  );
}

export default Body;
