import "./App.css";
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const btnClicked = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backSpace = () => {
    setResult(result.slice(0, result.length - 1)); // Or direct - 1
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("error");
    }
  };

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button name="7" onClick={btnClicked}>
            7
          </button>
          <button name="8" onClick={btnClicked}>
            8
          </button>
          <button name="9" onClick={btnClicked}>
            9
          </button>
          <button className="tasksBtn" name="+" onClick={btnClicked}>
            +
          </button>
          <button name="4" onClick={btnClicked}>
            4
          </button>
          <button name="5" onClick={btnClicked}>
            5
          </button>
          <button name="6" onClick={btnClicked}>
            6
          </button>
          <button className="tasksBtn" name="-" onClick={btnClicked}>
            &ndash;
          </button>
          <button name="1" onClick={btnClicked}>
            1
          </button>
          <button name="2" onClick={btnClicked}>
            2
          </button>
          <button name="3" onClick={btnClicked}>
            3
          </button>
          <button className="tasksBtn" name="*" onClick={btnClicked}>
            &times;
          </button>
          <button id="backSpace" onClick={backSpace}>
            Back
          </button>
          <button name="0" onClick={btnClicked}>
            0
          </button>
          <button name="." onClick={btnClicked}>
            .
          </button>
          <button className="tasksBtn" name="/" onClick={btnClicked}>
            &divide;
          </button>

          <button onClick={clear} id="clear">
            C
          </button>
          <button name="=" id="equal" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
