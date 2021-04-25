import React from "react";
import "./index.css";

const index = () => {
  return (
    <div className="grid-container">
      <div className="side">
        <strong>Sidebar</strong>

        <p>column 1</p>
        <p>column 2</p>
        <p>column 3</p>
        <p>column 4</p>
        <p>column 5</p>
        <h3>button</h3>
      </div>
      <div className="main">
        <strong>Dashboard</strong>
        <hr />
        <div className="box1">
          <div className="title">
            <h2 className="int">box 1</h2>
          </div>
        </div>
        <div className="box2">
          <div className="title">
            <h2 className="int">box 2</h2>
          </div>
        </div>
        <div className="box3" >
          <div className="title">
            <h2 className="int">box 3</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
