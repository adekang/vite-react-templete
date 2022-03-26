import React, { useState } from "react";
import "./App.scss";
import SvgIcon from "./components/SvgIcon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
      <div>
        <SvgIcon className="icon" iconName="play" />
        <SvgIcon className="icon" iconName="pose" />
      </div>
    </div>
  );
}

export default App;
