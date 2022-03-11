import React from "react";
const Circle = () => {
  return (
    <div>
      <div
        style={{
          height: "200px",
          width: "200px",
          borderRadius: "50%",
          backgroundColor: "brown",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "400px",
          borderRadius: "50%",
          backgroundColor: "pink",
        }}
      ></div>
      <div
        style={{
          height: "600px",
          width: "600px",
          borderRadius: "50%",
          backgroundColor: "purple",
        }}
      ></div>
    </div>
  );
};

export default Circle;
