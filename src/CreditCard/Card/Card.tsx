import React, { useState } from "react";
import "./Card.scss";
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

const Card: React.FC<Props> = ({
  code1,
  code2,
  code3,
  code4,
  month,
  year,
  fullName
}) => {
  return <div>Card</div>;
};

export default Card;
