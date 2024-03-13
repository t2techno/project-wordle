import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Input({ handleSubmit }) {
  const [value, setValue] = React.useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    if (value.length != 5) {
      window.alert("You can only guess 5 letter words");
      return;
    }

    handleSubmit(value);
    setValue("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        minLength={5}
        maxLength={5}
        onChange={(event) => setValue(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default Input;
