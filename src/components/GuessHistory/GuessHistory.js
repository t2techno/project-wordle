import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function GuessHistory({ guessHistory }) {
  return (
    <ul className="guess-results">
      {guessHistory.map((val) => (
        <li className="guess" key={val.id}>
          {val.guess}
        </li>
      ))}
    </ul>
  );
}

export default GuessHistory;
