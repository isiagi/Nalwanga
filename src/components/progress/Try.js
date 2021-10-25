import React from "react";
import Progress from "./Progress";
import pa from "../image/1.jpg";

import "./progress.css";

const testDataF = [
  { bgcolor: "#00a1a7", completed: 60, skill: "Html" },
  { bgcolor: "#00a1a7", completed: 60, skill: "Css" },
  { bgcolor: "#00a1a7", completed: 63, skill: "Javascript" },
  { bgcolor: "#00a1a7", completed: 63, skill: "React" },
  { bgcolor: "#00a1a7", completed: 63, skill: "Angular" },
];
const testData = [
  { bgcolor: "#00a1a7", completed: 63, skill: "Node" },
  { bgcolor: "#00a1a7", completed: 63, skill: "Php" },
  { bgcolor: "#00a1a7", completed: 63, skill: "Mongo DB" },
];

const stylo = {
  display: "flex",
  justifyContent: "space-around",
  // margin: 40,
  // flexWrap: "wrap",
};

function ProgressBar() {
  return (
    <div style={stylo}>
      <div>
        <h2>FRONTEND</h2>
        {testDataF.map((item, idx) => (
          <Progress
            key={idx}
            skill={item.skill}
            bgcolor={item.bgcolor}
            completed={item.completed}
          />
        ))}
      </div>
      <div>
        <h2>BACKEND</h2>
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
