import React from "react";
import "./Header.css";

function header() {
  return (
    <nav>
      <h1>Nalwanga Patricia</h1>
      <ul className="nav_list">
        <li>WRITING</li>
        <li>SPEAKING</li>
        <li>PROJECTS</li>
        <li>PHOTOS</li>
      </ul>
    </nav>
  );
}

export default header;
