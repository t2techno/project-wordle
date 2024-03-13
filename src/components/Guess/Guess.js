import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const wordLength = 5;
  console.log(guess);
  return (
    <p className="guess">
      {range(0, wordLength).map((i) => (
        <span key={i} className={`cell ${guess ? guess.status[i] : ""}`}>
          {guess && guess.guess.charAt(i)}
        </span>
      ))}
    </p>
  );
}

export default Guess;
