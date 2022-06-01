import React from "react";

const Button = ({ btnTxt, setToggle }) => {
  return (
    <div>
      <button data-testid="button" onClick={() => setToggle((value) => !value)}>
        {btnTxt}
      </button>
    </div>
  );
};

export default Button;
