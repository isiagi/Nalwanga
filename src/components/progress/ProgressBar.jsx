import React from "react";
import Progress from "./Progress";
import pa from "../image/1.jpg";

import './progress.css'

const testData = [
  { bgcolor: "#00a1a7", completed: 60, skill: "Html" },
  { bgcolor: "#00a1a7", completed: 60, skill: "Css" },
  { bgcolor: "#00a1a7", completed: 63, skill: "Javascript" },
  { bgcolor: "#00a1a7", completed: 63, skill: "React" },
  { bgcolor: "#00a1a7", completed: 63, skill: "Angular" },
  { bgcolor: "#00a1a7", completed: 63, skill: "Node" },
  { bgcolor: "#00a1a7", completed: 63, skill: "Php" },
];

const stylo = {
  display: "flex",
  justifyContent: "space-around",
  margin: 40,
  flexWrap: "wrap",
};

function ProgressBar() {
  return (
    <div style={stylo}>
      <div>
        <img src={pa} alt="patricia" width="180" height="200" style={{borderRadius: '50%'}}/>
        <h3 style={{fontFamily: 'sans-serif',fontSize: 18}}>Hello</h3>
        <p style={{fontFamily: 'sans-serif', fontSize: 18}}>Am a frontend developer in Kampala Uganda</p>
        <p style={{fontFamily: 'sans-serif', fontSize: 18}}>
          I have serious passion for UI effects, animations and creating <br/>
          intuitive, dynamic user experiences.
        </p>
      </div>
      <div className="bar">
        {testData.map((item, idx) => (
          <Progress
            key={idx}
            skill={item.skill}
            bgcolor={item.bgcolor}
            completed={item.completed}
          />
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;
