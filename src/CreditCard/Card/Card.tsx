import React, { useState } from "react";
import "./Card.scss";
import shipImage from "./ship.png";
import { restElement } from "@babel/types";
interface Props {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  month: string;
  year: string;
  fullName: string;
  // [propsName: string]: any;
}

function showCode(code: string): string {
  let stars = "****";
  let result = code + stars.substr(code.length);
  return result;
}

function showFullName(fullName: string): string {
  return fullName.length == 0 ? "enter your name" : fullName;
}

const Card: React.FC<Props> = ({
  code1,
  code2,
  code3,
  code4,
  month,
  year,
  fullName
}) => {
  return (
    <div className="card-container">
      <div style={{ width: "100%" }}>
        <h1 className="card-header">Lass Credit Card</h1>
      </div>
      <div style={{ width: "100%", marginBottom: "15px" }}>
        <img className="card-image" src={shipImage} />
      </div>
      <div
        style={{
          alignSelf: "flex-start",
          width: "80%",
          maxWidth: "220px",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <span className="card-code">{showCode(code1)}</span>
        <span className="card-code">{showCode(code2)}</span>
        <span className="card-code">{showCode(code3)}</span>
        <span className="card-code">{showCode(code4)}</span>
      </div>
      <div style={{ width: "100%" }} className="card-date">
        <span style={{ marginRight: "15px" }}>
          Valid
          <br />
          Throu
        </span>
        <span className="card-date-number">
          {month}/{year}
        </span>
      </div>
      <div style={{ width: "100%" }}>
        <h2 className="card-full-name">{showFullName(fullName)}</h2>
      </div>
    </div>
  );
};

export default Card;
