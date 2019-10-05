import React, { useState } from "react";
import Form from "./Form/Form";
import Card from "./Card/Card";
import "./CreditCard.scss";
import { number } from "prop-types";
import { strict } from "assert";
interface Props {}

const CreaditCard: React.FC<Props> = () => {
  const [code1, setCode1] = useState<string>("");
  const [code2, setCode2] = useState<string>("");
  const [code3, setCode3] = useState<string>("");
  const [code4, setCode4] = useState<string>("");

  const [month, setMonth] = useState<string>("01");
  const [year, setYear] = useState<string>("19");

  const [fullName, setFullName] = useState<string>("");
  return (
    <div className="credit-card-container">
      <Card
        code1={code1}
        code2={code2}
        code3={code3}
        code4={code4}
        month={month}
        year={year}
        fullName={fullName}
      />
      <Form
        code1={code1}
        code2={code2}
        code3={code3}
        code4={code4}
        month={month}
        year={year}
        fullName={fullName}
        setCode1={setCode1}
        setCode2={setCode2}
        setCode3={setCode3}
        setCode4={setCode4}
        setMonth={setMonth}
        setYear={setYear}
        setFullName={setFullName}
      />
    </div>
  );
};

export default CreaditCard;
