import React, { useContext } from "react";
import {
  CurrentValueContext,
  PrevValueContext,
  CountScreenContext,
  InitContext,
  EqualPushContext
} from "./Store";

const Screen = () => {
  const [currentValue, setCurrentvalue] = useContext(CurrentValueContext);
  const [previousValue, setPreviousvalue] = useContext(PrevValueContext);
  const [countScreen, setCountscreen] = useContext(CountScreenContext);
  const [init, setInit] = useContext(InitContext);
  const [equalPush, setEqualPush] = useContext(EqualPushContext);

  return (
    <div id="display">
      <div id="fullformula">{countScreen}</div>
      <div id="singleinput">
        {init}
        {equalPush ? " " : currentValue}
      </div>
    </div>
  );
};

export default Screen;
