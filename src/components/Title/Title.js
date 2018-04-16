import React from "react";
import "./Title.css";

const Title = props => (
  <div className="header">
    <h1 className="title">Clicky Game</h1>
    <h2 className="scores">Score: {props.score} High Score: {props.highScore}</h2>
  </div>
);

export default Title;
