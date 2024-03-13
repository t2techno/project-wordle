import React from "react";

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
