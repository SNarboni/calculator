import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [calcule, setCalcule] = useState("");
  const [total, setTotal] = useState("0");

  const calculate = (value) => {
    if (value === "=") {
      setTotal(eval(calcule));
      setCalcule("");
    } else if (value === "CLEAR") {
      setCalcule("");
      setTotal("0");
    } else {
      setCalcule(calcule + value);
    }
  };

  return (
    <div className="App">
      {/* create a calculator */}
      <div className="calculator">
        <div className="calculator_title">
          <h1>Ma calculatrice</h1>
        </div>
        <div className="calculator_render">
          <input type="text" value={calcule} />
          <input type="text" value={total} />
        </div>
        <div className="calculator_buttons">
          <div className="first ligne">
            <button onClick={(e) => calculate("CLEAR")}>CLEAR</button>
            <button onClick={(e) => calculate("DELETE")}>DELETE</button>
            <button onClick={(e) => calculate(".")}>.</button>
            <button onClick={(e) => calculate("/")}>/</button>
          </div>
          <div className="second ligne">
            <button onClick={(e) => calculate("7")}>7</button>
            <button onClick={(e) => calculate("8")}>8</button>
            <button onClick={(e) => calculate("9")}>9</button>
            <button onClick={(e) => calculate("*")}>*</button>
          </div>
          <div className="third ligne">
            <button onClick={(e) => calculate("4")}>4</button>
            <button onClick={(e) => calculate("5")}>5</button>
            <button onClick={(e) => calculate("6")}>6</button>
            <button onClick={(e) => calculate("-")}>-</button>
          </div>
          <div className="fourth ligne">
            <button onClick={(e) => calculate("1")}>1</button>
            <button onClick={(e) => calculate("2")}>2</button>
            <button onClick={(e) => calculate("3")}>3</button>
            <button onClick={(e) => calculate("+")}>+</button>
          </div>
          <div className="fifth ligne">
            <button onClick={(e) => calculate("0")}>0</button>
            <button onClick={(e) => calculate("=")}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
