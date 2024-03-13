import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const wordLength = 5;

  return (
    <p className="guess">
      {range(0, wordLength).map((i) => (
        <span className="cell" key={guess.id}>
          {guess && guess.guess.charAt(i)}
        </span>
      ))}
    </p>
  );
}

export default Guess;
