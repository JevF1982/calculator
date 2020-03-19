import React, { useContext, useState } from "react";
import {
  CurrentValueContext,
  PrevValueContext,
  CountScreenContext,
  ClearContext,
  InitContext,
  EqualPushContext
} from "./Store";

const Buttons = () => {
  const [currentValue, setCurrentValue] = useContext(CurrentValueContext);
  const [previousValue, setPreviousValue] = useContext(PrevValueContext);
  const [clear, setClear] = useContext(ClearContext);
  const [init, setInit] = useContext(InitContext);
  const [countScreen, setCountScreen] = useContext(CountScreenContext);
  const [equalPush, setEqualPush] = useContext(EqualPushContext);

  const handleNumbers = e => {
    // disable point
    if (e.target.value === ".") {
      document.getElementById("decimal").disabled = true;
    }

    // not more than one leading zero regex
    const reg = new RegExp("^0[0-9].*$");

    setClear(true);

    // clear initial zero
    setInit("");
    const newVal = [...currentValue, e.target.value].join("");

    // test regex and set new value
    if (!reg.test(newVal)) {
      setCurrentValue(newVal);
    }

    setEqualPush(false);
  };

  const handleClear = e => {
    setInit(0);
    setCurrentValue("");
    setCountScreen([]);
    setPreviousValue([]);
    setCurrentValue([]);
    setClear(false);
    document.getElementById("decimal").disabled = false;
  };

  const handleOperators = e => {
    // check if formula ends with negative sign regex
    const endsWithNegativeSign = new RegExp("-$");

    const formula = [...previousValue, currentValue];

    if (
      clear ||
      (e.target.value === "-" && !endsWithNegativeSign.test(previousValue))
    ) {
      formula.push(e.target.value);

      setCurrentValue("");
      setPreviousValue(formula);
      setCountScreen(formula);
    }
    // set input for numbers up again
    setClear(false);

    document.getElementById("decimal").disabled = false;
  };

  const handleFormula = () => {
    let newArr = [...previousValue, currentValue];

    while (
      newArr.lastIndexOf("x") === newArr.length - 1 ||
      newArr.lastIndexOf("/") === newArr.length - 1 ||
      newArr.lastIndexOf("+") === newArr.length - 1 ||
      newArr.lastIndexOf("") === newArr.length - 1 ||
      newArr.lastIndexOf("-") === newArr.length - 1
    ) {
      newArr.pop();
    }

    newArr = newArr
      .map(item => {
        return item.replace("x", "*");
      })
      .join("");

    console.log(newArr);

    setCountScreen(eval(newArr));
    setEqualPush(true);
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

      <button id="equals" value="=" onClick={handleFormula}>
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
