import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Text from "./Text";

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Text toggle={toggle} displayTxt="Geek" />
      <Button btnTxt="Toggle Text" setToggle={setToggle} />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("container"));
