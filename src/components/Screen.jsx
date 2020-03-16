import React, { useContext } from "react";
import {
  CurrentValueContext,
  PrevValueContext,
  CountScreenContext,
  InitContext
} from "./Store";

const Screen = () => {
  const [currentValue, setCurrentvalue] = useContext(CurrentValueContext);
  const [previousValue, setPreviousvalue] = useContext(PrevValueContext);
  const [countScreen, setCountscreen] = useContext(CountScreenContext);
  const [init, setInit] = useContext(InitContext);

  return (
    <div id="display">
      <div id="fullformula">{countScreen}</div>
      <div id="singleinput">
        {init}
        {currentValue}
      </div>
    </div>
  );
};

export default Screen;
