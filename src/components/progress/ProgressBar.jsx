import React from "react";
import pa from "../image/1.jpg";

import './progress.css'

const stylo = {
  display: "flex",
  justifyContent: "space-around",
  margin: 40,
  flexWrap: "wrap",
};

const love = {
  display: "flex",
  gap: 30,
  flexWrap: "wrap",
}

function ProgressBar() {
  return (
    <div style={stylo}>
    <div>
      <div style={love}>
        <img src={pa} alt="patricia" width="400" height="500" style={{backgroundSize: 'cover'}} />
        <div style={{lineHeight:2}}>
        <h3 style={{fontFamily: 'sans-serif',fontSize: 30}}>About Me</h3>
        <h3>Name: Nalwanga Patricia</h3>
        <h3>Profession: Web Designer & Developer</h3>
        <p style={{fontFamily: 'sans-serif', fontSize: 18}}>Am a frontend developer in Kampala Uganda</p>
        <p style={{fontFamily: 'sans-serif', fontSize: 18}}>
          I have serious passion for UI effects, animations and creating <br/>
          intuitive, dynamic user experiences.
        </p>
        <p style={{fontFamily: 'sans-serif', fontSize: 18}}>
          I have serious passion for UI effects, animations and creating <br/>
          intuitive, dynamic user experiences.
        </p>
        
        <button>Hire Me</button>
        </div>
      </div>
      </div>
      <div className="bar">
     
      </div>
    </div>
  );
}

export default ProgressBar;
