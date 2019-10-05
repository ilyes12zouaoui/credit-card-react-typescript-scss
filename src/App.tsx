import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import CreditCard from "./CreditCard/CreditCard";
const App: React.FC = () => {
  return (
    <div className="App">
      <CreditCard />
    </div>
  );
};

export default App;
