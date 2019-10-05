import React, { useState } from "react";
import "./Form.scss";
interface Props {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  month: string;
  year: string;
  fullName: string;

  setCode1: React.Dispatch<React.SetStateAction<string>>;
  setCode2: React.Dispatch<React.SetStateAction<string>>;
  setCode3: React.Dispatch<React.SetStateAction<string>>;
  setCode4: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
}

function filterCode(code: string): string {
  const lastChar = code.substr(-1, 1);
  if (code.length > 4 || lastChar < "0" || lastChar > "9")
    return code.substring(0, code.length - 1);
  return code;
}

function filterFullName(fullName: string): string {
  const lastChar = fullName.substr(-1, 1);
  if (lastChar == " " || lastChar.match(/[a-z]/i))
    return fullName.toUpperCase();
  return fullName.substring(0, fullName.length - 1).toUpperCase();
}

const Form: React.FC<Props> = ({
  code1,
  code2,
  code3,
  code4,
  month,
  year,
  fullName,
  setCode1,
  setCode2,
  setCode3,
  setCode4,
  setMonth,
  setYear,
  setFullName
}) => {
  return (
    <form className="credit-card-form">
      <div className="form-group">
        <div
          className="form-group-label-container"
          style={{ marginTop: "10px" }}
        >
          <label>Code:</label>
        </div>
        <div className="form-group-input-container">
          <input
            placeholder="0123"
            type="string"
            value={code1}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let code = event.target.value;
              setCode1(filterCode(code));
            }}
            className="form-group-input code-input"
          />
          <input
            placeholder="4567"
            type="string"
            value={code2}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let code = event.target.value;
              setCode2(filterCode(code));
            }}
            className="form-group-input code-input"
          />
          <input
            placeholder="8901"
            type="string"
            value={code3}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let code = event.target.value;
              setCode3(filterCode(code));
            }}
            className="form-group-input code-input"
          />
          <input
            placeholder="2345"
            type="string"
            value={code4}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let code = event.target.value;
              setCode4(filterCode(code));
            }}
            className="form-group-input code-input"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-group-label-container">
          <label>Valid Throught:</label>
        </div>
        <div className="form-group-input-container">
          <select
            value={month}
            onChange={event => {
              setMonth(event.target.value);
            }}
            className="form-group-input select-input"
          >
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select
            value={year}
            onChange={event => {
              setYear(event.target.value);
            }}
            className="form-group-input select-input"
          >
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <div className="form-group-label-container">
          <label>Full Name:</label>
        </div>
        <div className="form-group-input-container">
          <input
            type="text"
            placeholder="enter your name"
            value={fullName}
            onChange={event => {
              setFullName(filterFullName(event.target.value));
            }}
            className="form-group-input"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
