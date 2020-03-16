import React from "react";
import "./App.css";
import Panel from "./components/Panel";
import Store from "../src/components/Store";

function App() {
  return (
    <Store>
      <div className="App">
        <Panel />
      </div>
    </Store>
  );
}

export default App;
