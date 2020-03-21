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

  console.log(countScreen);

  return (
    <div id="display">
      <div id="fullformula">
        {currentValue.length > 18 ? "error...press AC!" : countScreen}
      </div>
      <div id="singleinput">
        {init}
        {equalPush ? " " : currentValue.length > 18 ? " " : currentValue}
      </div>
    </div>
  );
};

export default Screen;
