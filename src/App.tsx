import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import CreditCard from "./CreditCard/CreditCard";
import Footer from "./Footer/Footer";
const App: React.FC = () => {
  return (
    <div className="App">
      <CreditCard />
      <Footer />
    </div>
  );
};

export default App;
