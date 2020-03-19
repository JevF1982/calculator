import React, { useState } from "react";
import { createContext } from "react";

export const CurrentValueContext = createContext([]);
export const PrevValueContext = createContext();
export const CountScreenContext = createContext();
export const EqualPushContext = createContext();
export const ClearContext = createContext();
export const InitContext = createContext();

const Store = ({ children }) => {
  const [currentValue, setCurrentValue] = useState([]);
  const [previousValue, setPreviousValue] = useState([]);
  const [equalPush, setEqualPush] = useState(false);
  const [countScreen, setCountScreen] = useState([]);
  const [clear, setClear] = useState(false);
  const [init, setInit] = useState("0");

  return (
    <InitContext.Provider value={[init, setInit]}>
      <ClearContext.Provider value={[clear, setClear]}>
        <CurrentValueContext.Provider value={[currentValue, setCurrentValue]}>
          <PrevValueContext.Provider value={[previousValue, setPreviousValue]}>
            <EqualPushContext.Provider value={[equalPush, setEqualPush]}>
              <CountScreenContext.Provider
                value={[countScreen, setCountScreen]}
              >
                {children}
              </CountScreenContext.Provider>
            </EqualPushContext.Provider>
          </PrevValueContext.Provider>
        </CurrentValueContext.Provider>
      </ClearContext.Provider>
    </InitContext.Provider>
  );
};

export default Store;
