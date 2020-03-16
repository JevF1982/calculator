import React, { useContext, useState } from "react";
import {
  CurrentValueContext,
  PrevValueContext,
  CountScreenContext,
  ClearContext,
  InitContext
} from "./Store";

const Buttons = () => {
  const [currentValue, setCurrentValue] = useContext(CurrentValueContext);
  const [previousValue, setPreviousValue] = useContext(PrevValueContext);
  const [clear, setClear] = useContext(ClearContext);
  const [init, setInit] = useContext(InitContext);
  const [countScreen, setCountScreen] = useContext(CountScreenContext);

  const handleNumbers = e => {
    if (e.target.value === ".") {
      document.getElementById("decimal").disabled = true;
    }
    const reg = new RegExp("^0[0-9].*$");

    setClear(true);
    setInit("");
    const newVal = [...currentValue, e.target.value].join("");
    console.log(currentValue);
    if (!reg.test(newVal)) {
      setCurrentValue(newVal);
    }
  };

  const handleClear = e => {
    setInit(0);
    setCurrentValue("");
    setCountScreen([]);
  };

  const handleOperators = e => {
    if (clear && e.target.value !== "-") {
      const formula = [...countScreen, currentValue];
      formula.push(" " + e.target.value + " ");
      console.log(formula);
      setCurrentValue([]);
      setCountScreen(formula);
    }
    setClear(false);
    document.getElementById("decimal").disabled = false;
  };

  return (
    <div className="buttons">
      <button id="clear" value="" onClick={handleClear}>
        AC
      </button>
      <button id="divide" value="/" onClick={e => handleOperators(e)}>
        /
      </button>
      <button id="multiply" value="x" onClick={e => handleOperators(e)}>
        x
      </button>
      <button
        id="seven"
        value="7"
        className="smallButtons"
        onClick={e => handleNumbers(e)}
      >
        7
      </button>
      <button
        id="eight"
        value="8"
        className="smallButtons"
        onClick={e => handleNumbers(e)}
      >
        8
      </button>
      <button
        id="nine"
        value="9"
        className="smallButtons"
        onClick={e => handleNumbers(e)}
      >
        9
      </button>
      <button
        id="subtract"
        value="-"
        className="smallButtons"
        onClick={e => handleOperators(e)}
      >
        -
      </button>
      <button
        id="four"
        value="4"
        className="smallButtons"
        onClick={e => handleNumbers(e)}
      >
        4
      </button>
      <button
        id="five"
        value="5"
        className="smallButtons"
        onClick={e => handleNumbers(e)}
      >
        5
      </button>
      <button
        id="six"
        value="6"
        className="smallButtons"
        onClick={e => handleNumbers(e)}
      >
        6
      </button>
      <button
        id="add"
        value="+"
        className="smallButtons"
        onClick={e => handleOperators(e)}
      >
        +
      </button>

      <button
        id="one"
        value="1"
        className="smallButtons"
        onClick={e => handleNumbers(e)}
      >
        1
      </button>
      <button
        id="two"
        value="2"
        className="smallButtons"
        onClick={e => handleNumbers(e)}
      >
        2
      </button>
      <button
        id="three"
        value="3"
        className="smallButtons"
        onClick={e => handleNumbers(e)}
      >
        3
      </button>

      <button id="equals" value="=">
        =
      </button>

      <button id="zero" value="0" onClick={e => handleNumbers(e)}>
        0
      </button>
      <button id="decimal" value="." onClick={e => handleNumbers(e)}>
        .
      </button>
    </div>
  );
};

export default Buttons;
