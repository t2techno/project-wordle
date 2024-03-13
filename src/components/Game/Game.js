import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import GuessHistory from "../GuessHistory";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);

  const handleGuess = (guess) => {
    const nextGuessHistory = [...guessHistory, { id: Math.random(), guess }];
    setGuessHistory(nextGuessHistory);
  };

  return (
    <>
      <GuessHistory guessHistory={guessHistory} />
      <Input handleSubmit={handleGuess} />
    </>
  );
}

export default Game;
