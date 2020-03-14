import React from "react";

const Buttons = () => {
  return (
    <div className="buttons">
      <button id="clear">AC</button>
      <button id="divide">/</button>
      <button id="multiply">x</button>
      <button id="seven" className="smallButtons">
        7
      </button>
      <button id="eight" className="smallButtons">
        8
      </button>
      <button id="nine" className="smallButtons">
        9
      </button>
      <button id="subtract" className="smallButtons">
        -
      </button>
      <button id="four" className="smallButtons">
        4
      </button>
      <button id="five" className="smallButtons">
        5
      </button>
      <button id="six" className="smallButtons">
        6
      </button>
      <button id="add" className="smallButtons">
        +
      </button>

      <button id="one" className="smallButtons">
        1
      </button>
      <button id="two" className="smallButtons">
        2
      </button>
      <button id="three" className="smallButtons">
        3
      </button>

      <button id="equals">=</button>

      <button id="zero">0</button>
      <button id="decimal">.</button>
    </div>
  );
};

export default Buttons;
